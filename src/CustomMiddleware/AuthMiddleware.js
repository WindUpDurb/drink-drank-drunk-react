"use strict";

import React from "react";
import * as types from "../actions/actionTypes";

const CheckActiveUser = store => next => action => {
    /*let options = {
        credentials: "include"
    };
    fetch("/api/users/activeUser", options)
        .then(response => {
            return response.json();
        })
        .then(parsedResponse => {
            console.log("Parsed : ", parsedResponse);
            return next({
                type: types.ACTIVE_USER_CONFIRMED,
                activeUser: parsedResponse
            });

        })
        .catch(error => {
            return next(action);

        });
*/

    return next(action);

};

export default CheckActiveUser;



