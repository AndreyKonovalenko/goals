import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './containers/Auth/Auth';
import Layout from './hoc/Layout/Layout';
import GoalField from './containers/GoalField/GoalField';
import MyGoals from './containers/MyGoals/MyGoals';
import GoalBuilder from './containers/GoalBuilder/GoalBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
//import CustomCalendar from './containers/CustomCalendar/CustomCalendar';
//import CalendarCssTricks from './components/CalendarCssTricks/CalendarCssTricks';

//import './App.css';

class App extends Component {
    
    componentDidMount () {
        this.props.onTryAutoLogin();
    } 
    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/" exact component={MyGoals}/> 
                <Redirect to ="/" />
            </Switch>
        );
        
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/" exact component={MyGoals} />
                    <Route path="/builder" component={GoalBuilder} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/goalfield" exact component={GoalField} />
                    <Redirect to ="/" />
                </Switch>
            );
        }
        
        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
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
        onTryAutoLogin: () => dispatch(actions.authCheckState())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
