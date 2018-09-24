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

export const fetchGoals = (token, userId) => {
    return dispatch  => {
        dispatch(fetchGoalsStart());
        const queryParams = '?auth=' + token +'"';
        // orderBy - sintax provided by Firebase
        axios.get('/users/'+ userId + '/goals.json' + queryParams)
            .then(response => {
                let goalsList = {...response.data};
                console.log(response.data);
                dispatch(fetchGoalsSuccess(goalsList));
            })
            .catch(error => {
                dispatch(fetchGoalsFail(error));
            });
    };
};