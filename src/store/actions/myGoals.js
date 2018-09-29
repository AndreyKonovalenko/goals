import * as actionTypes from './actionTypes';
import axios from '../../axios-db';


export const fetchGoalsSuccess = (goalsList) => {
    return {
        type: actionTypes.FETCH_GOALS_SUCCESS,
        goalsList: goalsList
    };
};

export const fetchGoalsFail = (error) => {
    return {
        type: actionTypes.FETCH_GOALS_FAIL,
        error: error
    };
};

export const fetchGoalsStart = () => {
    return {
        type: actionTypes.FETCH_GOALS_START
    };
};

export const selectGoalById = (selectedGoalId) => {
    return {
        type: actionTypes.SELECT_GOAL_BY_ID,
        selectedGoalId: selectedGoalId
    };
};

export const fetchGoals = (token, userId) => {
    return dispatch  => {
        dispatch(fetchGoalsStart());
        const queryParams = '?auth=' + token +'"';
        const url = '/users/'+ userId + '/goals.json';
        axios.get(url + queryParams)
            .then(response => {
                dispatch(fetchGoalsSuccess(response.data))})
            .catch(error => dispatch(fetchGoalsFail(error))
        );
    };
};

export const redirectToGoal = () => {
    return {
        type: actionTypes.REDIRECT_TO_GOAL
    }
}

export const clearRedirectHistory = () => {
    return {
        type: actionTypes.CLEAR_REDIRECT_HISTORY
    }   
}