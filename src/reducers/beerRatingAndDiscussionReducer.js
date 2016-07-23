"use strict";

import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";

export default function beerRatingAndDiscussionReducer (state = initialState.beerRatingAndDiscussion, action) {

    switch(action.type) {
        case types.UPDATE_GLOBAL_BEER_RATING:
            return (
                Object.assign({}, state, {globalBeerRating: action.globalBeerRating})
            );

        case types.UPDATE_BEER_DISCUSSION:
            return (
                Object.assign({}, state, {beerDiscussion: action.discussion})
            );

        default:
            return state;
    }
}