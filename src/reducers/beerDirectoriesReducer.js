"use strict";

import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";


export default function beerDirectoriesReducer(state = initialState.beerDirectories, action) {

    switch(action.type) {
        case types.LOAD_BEER_DIRECTORY_SUCCESS:
            return (
                Object.assign({}, state, {beerDirectories: action.beerStyles})
            );

        case types.FETCH_STYLE_CONTENTS_SUCCESS:
            return (
                Object.assign({}, state,
                    {currentBeerStyle: {
                        pageNumber: action.pageNumber,
                        styleContents: action.styleContents
                    }})
            );

        case types.FETCH_BEER_DATA_SUCCESS:
            return (
              Object.assign({}, state, {currentBeer: action.beerData})
            );
        default:
            return state;
    }

}