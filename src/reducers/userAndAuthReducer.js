"use strict";

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userAndAuthReducer(state = initialState, action) {

    switch(action.type) {
        case types.ACTIVE_USER_CONFIRMED:
            console.log("The state: ", state);
            console.log("The action: ", action);
            return (
                Object.assign({}, state, {activeUser: action.activeUser})
            );

        default:
            return state;
    }

}