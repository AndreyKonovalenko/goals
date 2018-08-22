import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import GoalField from './containers/GoalField';


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <GoalField />
                </Layout>
            </div>
        );
    }
}

export default App;
