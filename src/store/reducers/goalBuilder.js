import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';


const initialSate = {
    error: null,
    goalCreated: false,
    loading: false,
};

const setupGoalStart = (state, action) => {
    return  updateObject(state, {loading: true, error: null});
};

const setupGoalSuccess = (state, action) => {
    return updateObject(state, {
        goalCreated: true,
        loading: false,
        error: null,
    });
};

const setupGoalFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case actionTypes.SETUP_GOAL_START: return setupGoalStart(state, action);
        case actionTypes.SETUP_GOAL_SUCCESS: return setupGoalSuccess(state, action);
        case actionTypes.SETUP_GOAL_FAIL: return setupGoalFail(state, action);
        default: return state;
    }    
};

export default reducer;