"use strict";

import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

export default function userAndAuthReducer(state = initialState.activeUser, action) {

    switch(action.type) {
        case types.ACTIVE_USER_CONFIRMED:
            return (
                Object.assign({}, state, action.activeUser)
            );

        default:
            return state;
    }

}