import React, { Component } from 'react';


import Calendar from '../../components/Calendar/Calendar';
import Input from '../../components/UI/Input/Input';
import cssObject from './GoalBuilder.css';
import {updateObject, checkValidity} from '../../shared/utility'; 



class GoalBuilder extends Component {
    state = {
        goalForm: {
            title: {
                elementType: 'input',
                elementConfig: {
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
                elementType: 'input',
                elementConfig: {
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
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'DD-MM-YYYY',
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
    
    inputChangedHandler = (event, inputIdentifier) => {
        //immutable way to copy complex objects with nested objects
        //using spread operator "..."
        const updatedFormElement = updateObject(this.state.goalForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.goalForm[inputIdentifier].validation),
            touched: true
        }); 
        
        const updatedGoalForm = updateObject(this.state.goalForm, {
            [inputIdentifier]: updatedFormElement
        });
        
        let formIsValid = true;
        for (let inputIdentifier in updatedGoalForm) {
            formIsValid = updatedGoalForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({goalForm: updatedGoalForm, formIsValid: formIsValid});
    }
    
    checkDayHandler = (event) => {
        event.target.setAttribute("style", "background-color: red");
        console.log(event.target.getAttribute("aria-label"));
    //    console.log("clicked", event.target.className, event.target.classList);
        const updatedFormElement = updateObject(this.state.goalForm.start, {
            value: event.target.getAttribute("aria-label"),
            valid: true,
            touched: true
        }); 
        
        const updatedGoalForm = updateObject(this.state.goalForm, {
            start: updatedFormElement
        });
        
        this.setState({goalForm: updatedGoalForm});
    }
    
    render() {
        const formElementArray = [];
        for (let key in this.state.goalForm) {
            formElementArray.push({
                id: key,
                config: this.state.goalForm[key] 
            });
        }
//        console.log(this.state.goalForm.start);

        let form = (
                <form>
                    {formElementArray.map(element => (
                    <Input
                            key={element.id} 
                            elementType={element.config.elementType}
                            elementConfig={element.config.elementConfig}
                            value={element.config.value}
                            changed={(event) => this.inputChangedHandler(event, element.id)}
                            invalid={!element.config.valid}
                            shouldValidate={element.config.validation}
                            touched={element.config.touched}/>
                    ))}
                </form>
        );
        return (
            <div className={cssObject.GoalBuilder}>
                    <h3>Set up your new goal parameters!</h3>
                    {form}
                    <Calendar onDayClick={this.checkDayHandler}/>
            </div>
        );
    }
}

export default GoalBuilder;