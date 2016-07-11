"use strict";

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/*function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == "_SUCCESS";
}*/

export default function requestStatusReducer(state = initialState.requestsInProgress, action) {

    switch(action.type) {
        case types.REQUEST_SENT:
            return (
                Object.assign({}, state, {requestsInProgress: state.requestsInProgress + 1})
            );
        case types.REQUEST_RECEIVED_SUCCESSFUL:
            return (
                Object.assign({}, state, {requestsInProgress: state.requestsInProgress - 1})
            );
        case types.REQUEST_RECEIVED_ERROR:
            return (
                Object.assign({}, state, {requestsInProgress: state.requestsInProgress - 1})
            );
        default:
            return state;
    }
}



