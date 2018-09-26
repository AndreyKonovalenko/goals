import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    goalConfig: null,
    loading: false,
    error: null
};

const updateGoalConfig = (state, action) => {
    console.log(action.updatedGoalConfig, state);
    return updateObject(state, {
        goalConfig: action.updatedGoalConfig});
};


const fetchSelectedGoalStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchSelectedGoalSuccess = (state, action) => {
    return updateObject(state, {
        goalConfig: action.goalConfig,
        loading: false 
    });
};

const fetchSelectedGoallFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHECKUP_GOAL_DAY: return updateGoalConfig(state, action);
        case actionTypes.FETCH_SELECTED_GOAL_SUCCESS: return fetchSelectedGoalSuccess(state, action);
        case actionTypes.FETCH_SELECTED_GOAL_START: return fetchSelectedGoalStart(state, action);
        case actionTypes.FETCH_SELECTED_GOAL_FAIL: return fetchSelectedGoallFail(state, action);
        default: return state;
    }
    
}

export default reducer;