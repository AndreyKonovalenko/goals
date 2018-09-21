import * as actionTypes from './actionTypes';
import axios from '../../axios-db';


export const setupGoalSuccess = ( goalConfig ) => {
    return {
        type: actionTypes.SETUP_GOAL_SUCCESS,
        goalConfig: goalConfig
    };
};

export const setupGoalFail = (error) => {
    return {
        type: actionTypes.SETUP_GOAL_FAIL,
        error: error
    };
};

export const setupGoalStart = () => {
    return {
        type: actionTypes.SETUP_GOAL_START
    };
};


export const setupGoal = (goalConfig, token, userId ) => {
    return dispatch => {
        dispatch(setupGoalStart());
        const url = 'users/' + userId +'/goals.json?auth=' + token; 
        axios.patch(url, goalConfig)
            .then( response => {
                console.log(response.data.name);
                dispatch(setupGoalSuccess(goalConfig));
            })
            .catch(error => {
                dispatch(setupGoalFail(error));
            });
    };
};