"use strict";

import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

export default function userAndAuthReducer(state = initialState.activeUser, action) {

    switch(action.type) {
        case types.ACTIVE_USER_CONFIRMED:
            return (
                Object.assign({}, state, action.activeUser)
            );

        case types.LOGOUT_USER:
            return (
                Object.assign({}, state, {})
            );

        default:
            return state;
    }

}