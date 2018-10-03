import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from '../../components/Authentication/Login/Login';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

// import Input from '../../components/UI/Input/Input';
// import Button from '../../components/UI/Button/Button';
import * as  actions from  '../../store/actions/index';
//import cssObject from './Auth.css';
import {updateObject, checkValidity} from '../../shared/utility';


class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }  
        },
        isSignup: true
    };
    
    
    inputChangedHandler = (event, controlName) => {
        const updatedControls =  updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({controls: updatedControls});
    }
    
     submitHandler = (event) => {
        event.preventDefault();  
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }
    
    // switchAuthModeHandler = () => {
    //     this.setState(prevState => {
    //         return {isSignup: !prevState.isSignup};
    //     });
    // }
    
    
    render () {
        // const formElementArray = [];
        // for (let key in this.state.controls) {
        //     formElementArray.push({
        //         id: key,
        //         config: this.state.controls[key]
        //     });
        // }
        
        //  let form = formElementArray.map(element => (
        //     <Input 
        //         key={element.id}
        //         elementType={element.config.elementType}
        //         elementConfig={element.config.elementConfig}
        //         value={element.config.value}
        //         changed={(event) => this.inputChangedHandler(event, element.id)}
        //         invalid={!element.config.valid}
        //         shouldValidate={element.config.validation}
        //         touched={element.config.touched} />
        // ));
        
        let authRedirect = null;
        
        if (this.props.isAuthenticated) {
            if(this.state.isSignup) {
                this.props.createRepo(this.props.token, this.props.userId, this.props.userHasRepo, this.state.controls.email.value);
            }
            authRedirect = <Redirect to={this.props.authRedirectPath} />;
        }
        
        return (
            <Auxiliary>
                {authRedirect}
                <Login
                    controls={this.state.controls}
                    error={this.props.error}
                    submitHandler={this.submitHandler}
                    inputChangedHandler={(event, controlName) => this.inputChangedHandler(event, controlName)}
                />
            </Auxiliary>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        token: state.auth.token,
        userId: state.auth.userId,
        userHasRepo: state.auth.userHasRepo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        createRepo: (token, userId, userHasRepo, email) => dispatch(actions.createUserRepo(token, userId, userHasRepo, email)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);