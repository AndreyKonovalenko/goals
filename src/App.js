import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
//import GoalField from './containers/GoalField';
import CustomCalendar from './containers/CustomCalendar/CustomCalendar';



class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <CustomCalendar/>
                </Layout>
            </div>
        );
    }
}

export default App;
