"use strict";

import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function beerDirectoriesReducer(state = initialState.beerDirectories, action) {

    switch(action.type) {
        case types.LOAD_BEER_DIRECTORY_SUCCESS:
            console.log("The action: ", action);
            return action.beerStyles;

        default:
            return state;
    }

}