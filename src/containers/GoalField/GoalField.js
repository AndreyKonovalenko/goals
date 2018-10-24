import React, { Component } from 'react'
import { connect } from 'react-redux';

//import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import StatusBoard from '../../components/StatusBoard/StatusBoard';
import Calendar from '../../components/Calendar/Calendar';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';

import {updateObject, checkDaysArrayForUpdate} from '../../shared/utility';
import * as  actions from '../../store/actions/index';
import classes from './GoalField.css';

class GoalField extends Component {
    
   

    componentDidMount() {
        this.props.onFetchSelectedGoal(this.props.token, this.props.userId, this.props.selectedGoalId);
    }

    checkDayHandler = (event) => {
        try {
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
        } catch (error) {
            console.log(error);
        }
    }
    
    
    render () {
        let goal = <Spinner />;
        
        if (!this.props.loading && this.props.goalConfig !== null) {
            goal =  (
                <div className={classes.GoalField}>
                    <h3>draft works</h3>
                    <StatusBoard
                        title={this.props.goalConfig.title}
                        limitation={this.props.goalConfig.limitation}
                        start={this.props.goalConfig.startDay}
                        left={this.props.indicators.left}
                        succeeded={this.props.indicators.succeeded}
                        failed={this.props.indicators.failed}
                    />
                    <Calendar 
                        onDayClick={(event) =>this.checkDayHandler(event)}
                        addStyleRules={true}
                    />
                    <Button 
                        buttonType='Success'
                        clicked={() => {
                            console.log('Funcion will execute now');
                            return (this.props.onSaveChangeHandler(
                                this.props.token, 
                                this.props.userId,
                                this.props.selectedGoalId,
                                this.props.goalConfig.daysArray)
                                );                           
                            }
                        }
                    >SAVE</Button>
                </div>
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
        selectedGoalId: state.myGoals.selectedGoalId,
        loading: state.goalField.loading,
        indicators: state.goalField.indicators
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDayCheckUp: (updatedGoalConfig) => dispatch(actions.checkUpGoalDay(updatedGoalConfig)),
        onFetchSelectedGoal: (token, userId, selectedGoalId) => dispatch(actions.fetchSelectedGoal(token, userId, selectedGoalId)),
        onSaveChangeHandler: (token, userId, selectedGoalId, goalConfigDaysArray) => dispatch(actions.updateGoal(token, userId, selectedGoalId, goalConfigDaysArray))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalField);