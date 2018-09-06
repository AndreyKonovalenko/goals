import React, { Component } from 'react';


import Calendar from '../../components/Calendar/Calendar';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
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
                touched: false,
                showCalendar: false
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
    
    unHideCalendarHandler = () => {
         const updatedFormElement = updateObject(this.state.goalForm.start, {
            showCalendar: true
        }); 
        const updatedGoalForm = updateObject(this.state.goalForm, {
            start: updatedFormElement
        });
        this.setState({goalForm: updatedGoalForm});
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
                            touched={element.config.touched}
                            unhide={(element.id === "start")? this.unHideCalendarHandler: null}/>
                    ))}
                    <Button buttonType="Success">SAVE</Button>
                    <Button buttonType="Danger">CANCEL</Button>
                    
                </form>
        );
        
        let calendar = (
                <div style={{visibility:'hidden'}}>
                    <Calendar   onDayClick={this.checkDayHandler}/>
                </div>
            );
        if (this.state.goalForm.start.showCalendar) {
                calendar = (
                    <div style={{visibility:'visible'}}>
                        <Calendar  onDayClick={this.checkDayHandler}/>
                    </div>
                );
        }
        console.log(this.state.goalForm.start.touched);
        return (
            <div className={cssObject.GoalBuilder}>
                    <h3>Set up your new goal parameters!</h3>
                    {form}
                    {calendar}
            </div>
        );
    }
}

export default GoalBuilder;