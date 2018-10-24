import * as actionTypes from './actionTypes';

export const changeLocation = (userLocation) => {
    return {
        type: actionTypes.CHANGE_LOCATION,
        userLocation: userLocation
    };
};