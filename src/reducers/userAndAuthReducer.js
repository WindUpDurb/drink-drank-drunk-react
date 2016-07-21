"use strict";

import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

export default function userAndAuthReducer(state = initialState.activeUser, action) {

    switch(action.type) {
        case types.UPDATE_USER_LOCATION: 
            return (
                Object.assign({}, state, action.coordinates)  
            );

        case types.UPDATE_USER_BEER_DATA:
            return (
              Object.assign({}, state, {userBeerData: action.updatedBeerData})
            );

        case types.UPDATE_ACTIVE_USER:
            return (
                Object.assign({}, state, action.activeUser)
            );

        case types.ACTIVE_USER_CONFIRMED:
            return (
                Object.assign({}, state, action.activeUser)
            );

        case types.LOGOUT_USER:
            return (
                null
            );

        default:
            return state;
    }

}