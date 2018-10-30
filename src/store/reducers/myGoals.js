import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialSate = {
    goalsList: null,
    loading: false,
    selectedGoalId: '',
    redirected: false,
    editMode: false,
    order: null
};

const clearState = (state ) => {
    return updateObject(state, {
        goalsList: null,
        loading: false,
        selectedGoalId: ''
    });
};

const editGoalsList = (state, action) => {
    return updateObject(state, {
        editMode: action.mode
    });
};

const fetchGoalsStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchGoalsSuccess = (state, action) => {
    return updateObject(state, {
        goalsList: action.goalsList,
        loading: false,
        order: action.order
    });
};

const fetchGoalsFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const selectGoalById = (state, action) => {
    return updateObject(state, {selectedGoalId: action.selectedGoalId}); 
};


const deleteGoalSuccess = (state, action) => {
    return updateObject(state, { loading: false });
};

const deleteGoalFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const deleteGoalStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GOALS_START: return fetchGoalsStart(state, action);
        case actionTypes.FETCH_GOALS_SUCCESS: return fetchGoalsSuccess(state, action);
        case actionTypes.FETCH_GOALS_FAIL: return fetchGoalsFail(state, action);
        case actionTypes.SELECT_GOAL_BY_ID: return selectGoalById(state, action);
        case actionTypes.AUTH_LOGOUT: return clearState(state);
        case actionTypes.EDIT_GOALS_LIST: return editGoalsList(state, action);
        case actionTypes.DELETE_GOAL_START: return deleteGoalStart(state, action);
        case actionTypes.DELETE_GOAL_FAIL: return deleteGoalFail(state, action);
        case actionTypes.DELETE_GOAL_SUCCESS: return deleteGoalSuccess(state, action);
        default: return state;
    }
};

export default reducer;