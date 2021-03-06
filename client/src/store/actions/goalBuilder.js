import * as actionTypes from './actionTypes';
import axios from '../../axios-db';


export const setupGoalSuccess = ( goalConfig ) => {
    return {
        type: actionTypes.SETUP_GOAL_SUCCESS
    };
};

export const setupGoalFail = (error) => {
    return {
        type: actionTypes.SETUP_GOAL_FAIL,
        error: error
    };
};

export const setupGoalComplete =() => {
    return {
        type: actionTypes.SETUP_GOAL_COMPLETE
    }
}

export const setupGoalStart = () => {
    return {
        type: actionTypes.SETUP_GOAL_START
    };
};

export const setupGoalCancel = () => {
    return {
        type: actionTypes.SETUP_GOAL_CANCEL
    };
};

export const setupGoal = (goalConfig, token, userId ) => {
    return dispatch => {
        dispatch(setupGoalStart());
        const url = 'users/' + userId +'/goals.json?auth=' + token; 
        axios.post(url, goalConfig)
            .then( response => {
                console.log(response.data.name);
                dispatch(setupGoalSuccess());
            })
            .catch(error => {
                dispatch(setupGoalFail(error));
            });
    };
};