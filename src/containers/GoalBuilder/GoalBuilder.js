import React, { Component } from 'react';
import {connect} from 'react-redux';


import Calendar from '../../components/Calendar/Calendar';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import cssObject from './GoalBuilder.css';
import * as  actions from  '../../store/actions/index';
import {updateObject, checkValidity, daysArrayBuilder} from '../../shared/utility';
//import axios from '../../axios-db';



class GoalBuilder extends Component {
    state = {
        goalForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: "text",
                    placeholder: "Goal title"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            limitation: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter limitation in days'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            start: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'DD.MM.YYYY',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                showCalendar: false
            }

        }
    }
    
    saveHandler = (event) => {
        event.preventDefault();
        const goalInitConfig = {
            title: this.state.goalForm.title.value,
            startDay: this.state.goalForm.start.value,
            limitation:this.state.goalForm.limitation.value,
            daysArray: daysArrayBuilder(this.state.goalForm.start.value, this.state.goalForm.limitation.value)
        };
        this.props.onSetupGoal(goalInitConfig, this.props.token, this.props.userId);

    }
    
    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.goalForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.goalForm[inputIdentifier].validation),
            touched: true
        }); 
        const updatedGoalForm = updateObject(this.state.goalForm, {
            [inputIdentifier]: updatedFormElement
        });
        let formIsValid = true;
        for (let inputIdentifier in updatedGoalForm) {
            formIsValid = updatedGoalForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({goalForm: updatedGoalForm, formIsValid: formIsValid});
    }
    
    unHideCalendarHandler = () => {
         const updatedFormElement = updateObject(this.state.goalForm.start, {
            showCalendar: true
        }); 
        const updatedGoalForm = updateObject(this.state.goalForm, {
            start: updatedFormElement
        });
        this.setState({goalForm: updatedGoalForm});
    }
    
    checkDayHandler = (event) => {
        try {
             //    event.target.setAttribute("style", "background-color: red");
            console.log(event.target.getAttribute("aria-label"));
            //    console.log("clicked", event.target.className, event.target.classList);
            const updatedFormElement = updateObject(this.state.goalForm.start, {
                value: event.target.getAttribute("aria-label"),
                valid: true,
                touched: true
            }); 
            const updatedGoalForm = updateObject(this.state.goalForm, {
            start: updatedFormElement
            });
        
            this.setState({goalForm: updatedGoalForm});    
            
    
        } catch (error) {
            console.log(error);
        }
    }
    
    resetFormHandler = (event) => {
        event.preventDefault();
        this.props.onCancel();
        
        let emptyForm = {...this.state.goalForm};
        for (let key in emptyForm) {
            emptyForm = updateObject(emptyForm, {
                [key]: updateObject(emptyForm[key], {
                    value: '',
                    valid: false,
                    touched: false
                })
            });
        }
        this.setState({goalForm: emptyForm});
        console.table(emptyForm);

    }
    
    render() {
        const formElementArray = [];
        for (let key in this.state.goalForm) {
            formElementArray.push({
                id: key,
                config: this.state.goalForm[key] 
            });
        }
        
        let form = (
            <form className='dataForm'>
                {formElementArray.map(element => (
                    <Input
                        key={element.id} 
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        changed={(event) => this.inputChangedHandler(event, element.id)}
                        invalid={!element.config.valid}
                        shouldValidate={element.config.validation}
                        touched={element.config.touched}
                        unhide={(element.id === "start")? this.unHideCalendarHandler: null}/>
                    ))
                }
                <Button buttonType="Success" clicked={this.saveHandler}>SAVE</Button>
                <Button buttonType="Danger" clicked={this.resetFormHandler}>CANCEL</Button>
            </form>
        );
        
        let calendar = (
                <div style={{visibility:'hidden'}}>
                    <Calendar   
                        onDayClick={null}
                        addStyleRules={false}
                    />
                </div>
            );
        if (this.state.goalForm.start.showCalendar) {
                calendar = (
                    <div style={{visibility:'visible'}}>
                        <Calendar  onDayClick={(event) => this.checkDayHandler(event)}/>
                    </div>
                );
        }
        console.log(this.state.goalForm.start.touched);
        let message = <h3>Set up your new goal parameters!</h3>;
        if (this.props.error !== null) {
            message = <h3>{this.props.error} </h3>; 
        }
        if (this.props.goalCreated === true){
            message = <h3> You  have successfuly setup your new goal</h3>;
        }
        
        return (
            <div className={cssObject.GoalBuilder}>
                    {message}
                    {form}
                    {calendar}       
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {        
        error: state.goalBuilder.error,
        token: state.auth.token,
        userId: state.auth.userId,
        goalCreated: state.goalBuilder.goalCreated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSetupGoal: (goalConfig, token, userId) => dispatch(actions.setupGoal(goalConfig, token, userId)),
        onCancel: () => dispatch(actions.setupGoalCancel())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalBuilder);