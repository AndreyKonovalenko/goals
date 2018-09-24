import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialSate = {
    goalsList: {},
    loading: false,
};


const fetchGoalsStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchGoalsSuccess = (state, action) => {
    return updateObject(state, {
        goalsList: action.goalsList,
        loading: false 
    });
};

const fetchGoalsFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GOALS_START: return fetchGoalsStart(state, action);
        case actionTypes.FETCH_GOALS_SUCCESS: return fetchGoalsSuccess(state, action);
        case actionTypes.FETCH_GOALS_FAIL: return fetchGoalsFail(state, action);
        default: return state;
    }
};

export default reducer;