import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import GoalField from './containers/GoalField';
//import CustomCalendar from './containers/CustomCalendar/CustomCalendar';
//import CalendarCssTricks from './components/CalendarCssTricks/CalendarCssTricks';

//import './App.css';

class App extends Component {

    render() {
        return (
            <Layout>
                <GoalField />
            </ Layout>

        );
    }
}

export default App;
