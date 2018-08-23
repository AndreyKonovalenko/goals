import React, { Component } from 'react'

import Calendar from '../components/Calendar/Calendar';


class GoalField extends Component {
    state = {
        gaol: {
            title: "MyFirstGoal",
            startDate: {
                
            },
            duration: 20,
            daysArray: [
                {
                    date: '11.08.2018',
                    succsess: true,
                    touched: true
                }
            ]
        }
      
    };
    
    render () {
        return (
            <Calendar
                title={this.state.gaol.title}
            />    
        );
    }
}

export default GoalField;