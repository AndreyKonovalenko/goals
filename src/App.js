import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import GoalField from './containers/GoalField/GoalField';
import MyGoals from './containers/MyGoals/MyGoals';
import GoalBuilder from './containers/GoalBuilder/GoalBuilder';
//import CustomCalendar from './containers/CustomCalendar/CustomCalendar';
//import CalendarCssTricks from './components/CalendarCssTricks/CalendarCssTricks';

//import './App.css';

class App extends Component {
    render() {
        
        const routes = (
            <Switch>
                <Route path="/" exact component={GoalField} />
                <Route path="/goals"component={MyGoals} />
                <Route path="/builder" component={GoalBuilder} />
            </Switch>
        );
        
        return (
            <Layout>
                {routes}
            </Layout>
 
        );
    }
}

export default App;
