import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialSate = {
    userLocation: null
};


const changeLocation = (state, action) => {
    return updateObject(state, {
        userLocation: action.userLocation
    });
};

const reducer = (state = initialSate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOCATION: return changeLocation(state, action);
        default: return state;
    }
};

export default reducer;