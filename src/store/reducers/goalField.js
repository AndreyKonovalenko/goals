import * as actionTypes from '../actions/actionTypes';
import { updateObject} from '../../shared/utility';

const initialState = {
    goalConfig: null,
    loading: false,
    error: null,
    indicators: {
        left: null,
        succeeded: null,
        failed: null,
    }
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


const updateGoalStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const updateGoalFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const updateGoalSuccess = (state, action) => {
    return updateObject(state, {loading: false});
};

const setupIndicators = (state, action) => {
    return updateObject(state, {
        indicators: action.indicators
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHECKUP_GOAL_DAY: return updateGoalConfig(state, action);
        case actionTypes.FETCH_SELECTED_GOAL_SUCCESS: return fetchSelectedGoalSuccess(state, action);
        case actionTypes.FETCH_SELECTED_GOAL_START: return fetchSelectedGoalStart(state, action);
        case actionTypes.FETCH_SELECTED_GOAL_FAIL: return fetchSelectedGoallFail(state, action);
        case actionTypes.UPDATE_GOAL_SUCCESS: return updateGoalSuccess(state, action);
        case actionTypes.UPDATE_GOAL_START: return updateGoalStart(state, action);
        case actionTypes.UPDATE_GOAL_FAIL: return updateGoalFail(state, action);
        case actionTypes.SETUP_GOAL_INDICATORS: return setupIndicators(state, action);
        default: return state;
    }
};

export default reducer;