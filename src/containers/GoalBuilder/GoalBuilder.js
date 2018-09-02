import React, { Component } from 'react';

import cssObject from './GoalBuilder.css';


class GoalBuilder extends Component {
    state = {
        goalForm: {
            title: {
                elemenetType: 'input';
                elemenetConfig: {
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

        }
    }
        

    
    
    render(){
        return (
            <div>
            </div>
        );
    }
}

export default GoalBuilder;