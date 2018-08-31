import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import GoalField from './containers/GoalField';
//import CustomCalendar from './containers/CustomCalendar/CustomCalendar';
//import CalendarCssTricks from './components/CalendarCssTricks/CalendarCssTricks';

//import './App.css';

class App extends Component {

    render() {
        
        const routes = (
            <Route path="/" component={GoalField}/>
        );
        
        return (
            <Layout>
                {routes}
            </Layout>
 
        );
    }
}

export default App;
