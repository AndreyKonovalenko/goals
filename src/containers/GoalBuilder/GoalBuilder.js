import React, { Component } from 'react';


import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Colendar from '../../componet/Colendar/Colendar';
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
    
    render() {
        let form = (
            <div>
            </div>
        );
        return (
            <Auxiliary>
                <div className={cssObject.GoalBuilder}>
                    {form}
                </div>
                <div className={cssObject.GoalBuilder}>
                    <Colendar/>
                </div>
            </Auxiliary> 
        );
    }
}

export default GoalBuilder;