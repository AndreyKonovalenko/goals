import * as actionTypes from './actionTypes';
import axios from '../../axios-db';


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

export const fetchSelectedGoal = (token, userId, selectedGoalId) => {
    return dispatch  => {
        dispatch(fetchSelectedGoalStart());
        const queryParams = '?auth=' + token +'"';
        const url = '/users/'+ userId + '/goals/' + selectedGoalId + '.json';
        console.log(url);
        axios.get(url + queryParams)
            .then(response => dispatch(fetchSelectedGoalSuccess(response.data)))
            .catch(error => dispatch(fetchSelectedGoalFail(error))
        );
    };
};