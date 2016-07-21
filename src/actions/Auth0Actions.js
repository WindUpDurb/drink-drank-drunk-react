"use strict";

import Auth0Lock from 'auth0-lock';
import * as types from "./actionTypes";

/*function showLock() {
    return {
        type: SHOW_LOCK
    };
}*/

function lockSuccess(profile) {
    return {
        type: types.ACTIVE_USER_CONFIRMED,
        activeUser: profile
    };
}

function lockError(err) {
    return {
        type: types.AUTH0_LOCK_ERROR,
        err
    };
}

export function login() {
    const lock = new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN);
    return dispatch => {
        lock.show((error, profile, token) => {
            if(error) {
                dispatch(lockError(error));
                return;
            }
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            let options = {
                method: "POST",
                credentials: "same-origin",
                headers: headers,
                mode: "cors",
                cache: "default",
                body: JSON.stringify({email: profile.email})
            };
            fetch("/api/users/login", options)
                .then(response => {
                    return response.json();
                })
                .then(parsedResponse => {
                    console.log("paresed response: ", parsedResponse);
                    profile.userBeerData = parsedResponse;
                    dispatch(lockSuccess(profile));
                })
                .catch(error => {
                    console.log("Error: ", error);
                });
        });
    };
}



