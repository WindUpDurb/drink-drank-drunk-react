"use strict";

import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

export default function breweriesReducer(state = initialState.breweryResults, action) {
    switch(action.type) {
        case types.FETCH_NEARBY_BREWERIES_SUCCESS:
            return (
                action.breweries
            );

        default:
            return state;
    }
}