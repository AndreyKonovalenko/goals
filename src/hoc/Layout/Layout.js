import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import Auxiliary from '../Auxiliary/Auxiliary';
import cssObject from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import * as actions from '../../store/actions/index';

class Layout extends Component {
    // state = { 
    //     showSideDrawer: false 
    // }
    
    // sideDrawerClosedHandler = () => {
    //     this.setState({showSideDrawer: false});
    // }

    // sideDrawerToggleHandler = () => {
    //     this.setState((prevState) => {
    //         return  {showSideDrawer: !prevState.showSideDrawer };
    //     });
    // }

    onNavigateGoalBuilder = () => {
        console.log('to builder');
        this.props.history.push('/builder');
    }

    render () {
        return(
            <Auxiliary>
                <Toolbar
                    isAuth={this.props.isAuthenticated} 
                    onAddGoalClick={this.onNavigateGoalBuilder}
                    onEditClick={this.props.onEditHandler}
                />
                <main className={cssObject.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}
 
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditHandler: () => dispatch(actions.editGoalsList())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));