import React, { Component } from 'react';


class MyGoals extends Component {
    state = {
        list: []
    }
    
    render() {
        return (
            <div>
                <ul> 
                    <li>Goal1</li>
                    <li>Goal</li>
                </ul>
            </div>
        );
    }
}

export default MyGoals;