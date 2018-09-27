import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialSate = {
    goalsList: null,
    loading: false,
    selectedGoalId: ''
};

const clearState = (state ) => {
    return updateObject(state, {
        goalsList: null,
        loading: false,
        selectedGoalId: ''
    });
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

const selectGoalById = (state, action) => {
    return updateObject(state, {selectedGoalId: action.selectedGoalId})
}
const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GOALS_START: return fetchGoalsStart(state, action);
        case actionTypes.FETCH_GOALS_SUCCESS: return fetchGoalsSuccess(state, action);
        case actionTypes.FETCH_GOALS_FAIL: return fetchGoalsFail(state, action);
        case actionTypes.SELECT_GOAL_BY_ID: return selectGoalById(state, action);
        case actionTypes.AUTH_LOGOUT: return clearState(state);
        default: return state;
    }
};

export default reducer;