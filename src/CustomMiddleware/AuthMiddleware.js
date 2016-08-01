"use strict";

import React from "react";
import * as types from "../actions/actionTypes";
import * as UserActions from "../actions/UserActions";
import {browserHistory} from "react-router";
import toastr from "toastr";

const CheckActiveUser = store => next => action => {
    if (action.type !== types.CHECK_ACTIVE_USER) return next(action);
    if (localStorage.profile && localStorage.id_token) {
        let profile = JSON.parse(localStorage.profile);
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
                profile.userBeerData = parsedResponse;
                store.dispatch(UserActions.activeUserConfirmed(profile));
                return next(action);
            })
            .catch(error => {
                console.log("Error: ", error);
                return next(action);
            });
    } else {
        return next(action);
    }
};

// const CheckState = store => next => action => {
//     console.log("Store: ", store.getState());
//     console.log("next: ", next);
//     console.log("action: ", action);
//     let beerDirectories = store.getState().beerDirectories;
//     switch (action.type) {
//         case types.CHECK_CURRENT_BEER_STATE:
//             if (beerDirectories.currentBeer) {
//                 return next(action);
//             } else {
//                 return browserHistory.push("/");
//             }
//
//         default:
//             return next(action);
//     }
//
// };

export default {CheckActiveUser};



