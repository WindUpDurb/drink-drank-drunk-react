"use strict";

import Auth0Lock from 'auth0-lock';
import * as types from "./actionTypes";

/*function showLock() {
    return {
        type: SHOW_LOCK
    };
}*/

function lockSuccess(profile, token) {
    console.log("Profile: ", profile);
    console.log("TOken: ", token);
    return {
        type: types.AUTH0_LOCK_SUCCESS,
        profile,
        token
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
            dispatch(lockSuccess(profile, token));
        });
    };
}



