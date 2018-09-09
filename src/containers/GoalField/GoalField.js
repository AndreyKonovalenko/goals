import React, { Component } from 'react'

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import StatusBoard from '../../components/StatusBoard/StatusBoard';
import Calendar from '../../components/Calendar/Calendar';

import {updateObject, checkDaysArrayForUpdate} from '../../shared/utility';


class GoalField extends Component {
    state = {
        goalConfig: {
            title: "budget 50%",
            startDay: "09.09.2018",
            limitation: 4,
            daysArray: [
                {id: "09.09.2018", success: null, touched: false},
                {id: "10.09.2018", success: null, touched: false},
                {id: "11.09.2018", success: null, touched: false},
                {id: "12.09.2018", success: null, touched: false}
            ]
        }
    }


    
    checkDayHandler = (event) => {
        event.target.setAttribute("style", "background-color: green");
    //     console.log("clicked", event.target.className, event.target.classList); 
        const dayForUpdate = event.target.getAttribute("aria-label");
     //   console.log(dayForUpdate); 
        const position = checkDaysArrayForUpdate(this.state.goalConfig.daysArray, dayForUpdate);
    //    console.log(this.state.goalConfig.daysArray[position]);
        const updatedElement = updateObject(this.state.goalConfig.daysArray[position], {
            success: true,
            touched: true
        }); 
        const updatedDaysArray = this.state.goalConfig.daysArray.map(element => {
            let newElement = null;
            if (this.state.goalConfig.daysArray.indexOf(element) === position){
                newElement = updatedElement;
            } else {
                newElement = element;
            }
            return newElement;
        });
        const updatedGoalConfig = updateObject(this.state.goalConfig, {
            daysArray: updatedDaysArray
        });
        console.log(updatedGoalConfig);
        this.setState({goalConfig: updatedGoalConfig});
        console.log("newState", this.state.goalConfig);
    }
    
    render () {
        return (
    //       <Editor/>
            <Auxiliary>
                <StatusBoard
                    title={this.state.goalConfig.title}
                    limitation={this.state.goalConfig.limitation}
                    start={this.state.goalConfig.startDay}
                />
                <Calendar 
                    onDayClick={this.checkDayHandler}/>
            </Auxiliary>
        );
    }
}

export default GoalField;