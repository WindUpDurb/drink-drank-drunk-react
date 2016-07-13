"use strict";

import * as types from "./actionTypes";
import * as requestStatusActions from "./requestStatusActions";

export function activeUserConfirmed(activeUser) {
    return {
        type: types.ACTIVE_USER_CONFIRMED,
        activeUser: activeUser
    };
}

export function confirmActiveUser() {
    return function (dispatch) {
        let options = {
            credentials: "include"
        };
         fetch("/api/users/activeUser", options)
             .then(response => {
                 return response.json();
             })
             .then(parsedResponse => {
                 console.log("Parsed : ", parsedResponse);
                 dispatch(activeUserConfirmed(parsedResponse));
             })
             .catch(error => {

             });

    };
}

export function submitLogin(loginData) {
    return function(dispatch) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify(loginData)
        };
        dispatch(requestStatusActions.requestSent());
        return fetch("/api/users/login", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                console.log("Parsed response: ", parsedResponse)
                dispatch(requestStatusActions.receivedRequestSuccess());

            })
            .catch(error => {
                dispatch(requestStatusActions.receivedRequestError());
                console.log("Error: ", error)
                return error;
            });

    };
}

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