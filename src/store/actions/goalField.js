import * as actionTypes from './actionTypes';


export const checkUpGoalDay = (updatedGoalConfig) => {
    return {
        type: actionTypes.CHECKUP_GOAL_DAY,
        updatedGoalConfig: updatedGoalConfig
    }
}