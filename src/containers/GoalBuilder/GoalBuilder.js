import React, { Component } from 'react';


import Calendar from '../../components/Calendar/Calendar';
import cssObject from './GoalBuilder.css';



class GoalBuilder extends Component {
    state = {
        goalForm: {
            title: {
                elemenetType: 'input',
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
            limitation: {
                elemenetType: 'input',
                elemenetConfig: {
                    type: 'text',
                    placeholder: 'Enter limitation in days'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            start: {
                elemenetType: 'input',
                elemenetConfig: {
                    type: 'text',
                    placeholder: 'Pick start date on the calendar'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }

        }
    }
    
    // orderHandler = (event) => {
    //     event.preventDefault();

    //     const goalForm = {};
    //     for(let key in this.state.goalForm) {
    //         goalForm[key] = this.state.goalForm[key].value;
    //     }
    // }
    
    checkDayHandler = (event) => {
        event.target.setAttribute("style", "background-color: green");
        console.log("clicked", event.target.className, event.target.classList); 
    }
    
    render() {
        console.log(this.state);
        let form = (
            <div>
            </div>
        );
        return (
            <div className={cssObject.GoalBuilder}>
                    {form}
                    <Calendar onDayClick={this.checkDayHandler}/>
            </div>
        );
    }
}

export default GoalBuilder;