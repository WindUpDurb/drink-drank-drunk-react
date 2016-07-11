"use strict";

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

/*function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == "_SUCCESS";
}*/

export default function requestStatusReducer(state = initialState.requestsInProgress, action) {
    if (action.type === types.SEND_OUT_REQUEST) {
        return (
            Object.assign({}, state, {requestsInProgress: state.requestsInProgress + 1})
        );
        //add an || condition for when a request is successful
    } else if (action.type === types.REQUEST_SENT_ERROR) {
        return (
            Object.assign({}, state, {requestsInProgress: state.requestsInProgress - 1})
        );
    }
    return state;
}



