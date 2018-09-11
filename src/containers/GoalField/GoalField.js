import React, { Component } from 'react'
import { connect } from 'react-redux';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import StatusBoard from '../../components/StatusBoard/StatusBoard';
import Calendar from '../../components/Calendar/Calendar';

import {updateObject, checkDaysArrayForUpdate} from '../../shared/utility';
import * as  actions from '../../store/actions/index';

class GoalField extends Component {
    // state = {
    //     goalConfig: {
    //         title: "budget 50%",
    //         startDay: "09.09.2018",
    //         limitation: 4,
    //         daysArray: [
    //             {id: "09.09.2018", success: false, touched: false},
    //             {id: "10.09.2018", success: false, touched: false},
    //             {id: "11.09.2018", success: false, touched: false},
    //             {id: "12.09.2018", success: false, touched: false}
    //         ]
    //     }
    // }

    checkDayHandler = (event) => {
     //    event.target.setAttribute("style", "background-color: green");
        const dayForUpdate = event.target.getAttribute("aria-label");
        const position = checkDaysArrayForUpdate(this.props.goalConfig.daysArray, dayForUpdate);
        
        
        const updatedElement = updateObject(this.props.goalConfig.daysArray[position], {
            success: !this.props.goalConfig.daysArray[position].success,
            touched: true
        }); 
        const updatedDaysArray = this.props.goalConfig.daysArray.map(element => {
            let newElement = null;
            if (this.props.goalConfig.daysArray.indexOf(element) === position){
                newElement = updatedElement;
            } else {
                newElement = element;
            }
            return newElement;
        });
        const updatedGoalConfig = updateObject(this.props.goalConfig, {
            daysArray: updatedDaysArray
        });
        this.props.onDayCheckUp(updatedGoalConfig);
    }
    
    render () {
    //    console.log(this.props.goalConfig);
        return (
    //       <Editor/>
            <Auxiliary>
                <StatusBoard
                    title={this.props.goalConfig.title}
                    limitation={this.props.goalConfig.limitation}
                    start={this.props.goalConfig.startDay}
                />
                <Calendar 
                    onDayClick={this.checkDayHandler} 
                />
            </Auxiliary>
        );
    }
}

const mapStateToProps = state => {
    return {
        goalConfig: state.goalField.goalConfig
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDayCheckUp: (updatedGoalConfig) => dispatch(actions.checkUpGoalDay(updatedGoalConfig)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalField);