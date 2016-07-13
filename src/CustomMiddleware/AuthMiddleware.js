"use strict";

import React from "react";
import * as types from "../actions/actionTypes";
import * as UserActions from "../actions/UserActions";
import {browserHistory} from "react-router";
import toastr from "toastr";

const CheckActiveUser = store => next => action => {
    if (action.type !== types.CHECK_ACTIVE_USER) return next(action);

    let options = {
        credentials: "include"
    };
    fetch("/api/users/activeUser", options)
        .then(response => {
            return response.json();
        })
        .then(parsedResponse => {
            if(!parsedResponse.error) {
                store.dispatch(UserActions.activeUserConfirmed(parsedResponse));
            }
            return next(action);


        })
        .catch(error => {
            return next(action);
        });
};

const UserOnlyRoute = store => next => action => {
    if (action.type !== types.DO_YOU_BELONG_HERE) return next(action);
    function checkCookies(cookies) {
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].includes("accessToken")) {
                return true;
            }
        }
        return null;
    }
    let clearance = checkCookies(document.cookie.split(";")) || store.getState().userAndAuth;
    if (!clearance) {
        browserHistory.push("/");
        toastr.error("You need to be logged in.");
    }
};

export default {UserOnlyRoute, CheckActiveUser};



