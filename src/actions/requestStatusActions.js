"use strict";

import * as types from "./actionTypes";

export function sendOutRequest() {
    return {type: types.SEND_OUT_REQUEST};
}

export function sentRequestError() {
    return {type: types.REQUEST_SENT_ERROR};
}