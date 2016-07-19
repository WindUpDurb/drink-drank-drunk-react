"use strict";

import * as types from "./actionTypes";
import * as requestStatusActions from "./requestStatusActions";

export function activeUserConfirmed(activeUser) {
    return {
        type: types.ACTIVE_USER_CONFIRMED,
        activeUser: activeUser
    };
}

export function dispatchUpdatedUserLocation(coordinates){
    return {
        type: types.UPDATE_USER_LOCATION,
        coordinates: coordinates
    };
}

export function dispatchLogoutAction() {
    return {
        type: types.LOGOUT_USER
    };
}

export function dispatchSecuritySearchAction() {
    return {
        type: types.DO_YOU_BELONG_HERE
    };
}

export function securitySearch() {
    return function(dispatch){
        dispatch(dispatchSecuritySearchAction());
    };
}


export function dispatchLogout() {
    return function(dispatch) {
        let options = {
            credentials: "include",
            method: "DELETE"
        };
        fetch("/api/users/logout", options)
            .then(response => {
                dispatch(dispatchLogoutAction());
                return true;
            })
            .catch(error => {
                console.log("Error: ", error);
            });

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
                if (parsedResponse.error) {
                    dispatch(requestStatusActions.receivedRequestSuccess());
                    return parsedResponse;
                }
                dispatch(requestStatusActions.receivedRequestSuccess());
                dispatch(activeUserConfirmed(parsedResponse));
                return {success: "Drink-Drink"};

            })
            .catch(error => {
                dispatch(requestStatusActions.receivedRequestError());
                console.log("Error: ", error);
                return error;
            });

    };
}

export function updateCurrentUserLocation() {
    return function(dispatch){
        navigator.geolocation.getCurrentPosition(position => {
            let coordinates = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            dispatch(dispatchUpdatedUserLocation(coordinates));
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
        dispatch(requestStatusActions.requestSent());
        return fetch("/api/users", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                dispatch(requestStatusActions.receivedRequestSuccess());
                return parsedResponse;
            })
            .catch(error => {
                dispatch(requestStatusActions.receivedRequestError());
                return error;
            });
    };
}