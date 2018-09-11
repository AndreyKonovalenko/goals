import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    goalConfig: {
        title: "budget 50%",
        startDay: "09.09.2018",
        limitation: 4,
        daysArray: [
            {id: "09.09.2018", success: false, touched: false},
            {id: "10.09.2018", success: false, touched: true},
            {id: "11.09.2018", success: true, touched: true},
            {id: "12.09.2018", success: false, touched: false}
        ]
    }
}

const updateGoalConfig = (state, action) => {
    console.log(action.updatedGoalConfig, state);
    return updateObject(state, {
        goalConfig: action.updatedGoalConfig});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHECKUP_GOAL_DAY: return updateGoalConfig(state, action);
        default: return state;
    }
    
}

export default reducer;