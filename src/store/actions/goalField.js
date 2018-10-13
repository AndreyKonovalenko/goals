import * as actionTypes from './actionTypes';
import axios from '../../axios-db';
import { setupInd } from '../../shared/utility';


export const checkUpGoalDay = (updatedGoalConfig) => {
    return {
        type: actionTypes.CHECKUP_GOAL_DAY,
        updatedGoalConfig: updatedGoalConfig
    };
};


export const fetchSelectedGoalSuccess = (goalConfig) => {
    return {
        type: actionTypes.FETCH_SELECTED_GOAL_SUCCESS,
        goalConfig: goalConfig
    };
};

export const fetchSelectedGoalFail = (error) => {
    return {
        type: actionTypes.FETCH_SELECTED_GOAL_FAIL,
        error: error
    };
};

export const fetchSelectedGoalStart = () => {
    return {
        type: actionTypes.FETCH_SELECTED_GOAL_START
    };
};


export const setupIndicators = (daysArray) => {
    return {
        type: actionTypes.SETUP_GOAL_INDICATORS,
        indicators: setupInd(daysArray)
    }
}

export const fetchSelectedGoal = (token, userId, selectedGoalId) => {
    return dispatch  => {
        dispatch(fetchSelectedGoalStart());
        const queryParams = '?auth=' + token +'"';
        const url = '/users/'+ userId + '/goals/' + selectedGoalId + '.json';
        console.log(url);
        axios.get(url + queryParams)
            .then(response => {
                dispatch(setupIndicators(response.data.daysArray));
                dispatch(fetchSelectedGoalSuccess(response.data));
            })
            .catch(error => dispatch(fetchSelectedGoalFail(error))
        );
    };
};


export const updateGoalSuccess= () => {
    return {
        type: actionTypes.UPDATE_GOAL_SUCCESS,
    };
};

export const updateGoalFail = (error) => {
    return {
        type: actionTypes.UPDATE_GOAL_FAIL,
        error: error
    };
};

export const updateGoalStart = () => {
    return {
        type: actionTypes.UPDATE_GOAL_START
    };
};



export const updateGoal = (token, userId, selectedGoalId, goalConfig) => {
    return dispatch  => {
        dispatch(updateGoalStart());
        const queryParams = '?auth=' + token +'"';
        const url = '/users/' + userId + '/goals/' + selectedGoalId + '/daysArray.json' + queryParams;
        console.log(url);
        axios.put(url, goalConfig)
            .then(response => {
                console.log(response.data.name);
                dispatch(updateGoalSuccess());
                dispatch(fetchSelectedGoal(token, userId, selectedGoalId));
            })
            .catch(error => {
                dispatch(updateGoalFail(error))
            }
        )
    };
};
