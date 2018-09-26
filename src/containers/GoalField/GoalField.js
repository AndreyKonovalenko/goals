import React, { Component } from 'react'
import { connect } from 'react-redux';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import StatusBoard from '../../components/StatusBoard/StatusBoard';
import Calendar from '../../components/Calendar/Calendar';

import {updateObject, checkDaysArrayForUpdate} from '../../shared/utility';
import * as  actions from '../../store/actions/index';

class GoalField extends Component {

    componentDidMount() {
        console.log("Did Mount works")
        this.props.onFetchSelectedGoal(this.props.token, this.props.userId, this.props.selectedGoalId);
    }
    
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
    
        let goal = <p>loading requeseted goal ...</p>;
        
        if (this.props.goalConfig !== null) {
            goal =  (
                <Auxiliary>
                  <h3>draft works</h3>
                    <StatusBoard
                        title={this.props.goalConfig.title}
                        limitation={this.props.goalConfig.limitation}
                        start={this.props.goalConfig.startDay}
                    />
                    <Calendar 
                        onDayClick={this.checkDayHandler}
                        addStyleRules={true}
                    />  
                </Auxiliary>
            );
                
        }
    
        return (
            <div>
                {goal}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        goalConfig: state.goalField.goalConfig,
        token: state.auth.token,
        userId: state.auth.userId,
        selectedGoalId: state.myGoals.selectedGoalId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDayCheckUp: (updatedGoalConfig) => dispatch(actions.checkUpGoalDay(updatedGoalConfig)),
        onFetchSelectedGoal: (token, userId, selectedGoalId) => dispatch(actions.fetchSelectedGoal(token, userId, selectedGoalId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalField);