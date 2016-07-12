"use strict";

import * as types from "./actionTypes";
import * as requestStatusActions from "./requestStatusActions";

export function submitRegistrationForm(newUserData) {
    return function(dispatch) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(newUserData)
        };
        console.log("Request sending: ", options);
        dispatch(requestStatusActions.requestSent());
        return fetch("/api/users", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                console.log("Parsed Response: ", parsedResponse);
                dispatch(requestStatusActions.receivedRequestSuccess());
                return parsedResponse;
            })
            .catch(error => {
                dispatch(requestStatusActions.receivedRequestError());
                return error;
            });
    };
}