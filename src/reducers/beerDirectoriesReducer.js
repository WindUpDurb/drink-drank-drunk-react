"use strict";

import * as types from "../actions/actionTypes";
import initialState from "./initialState";


export default function beerDirectoriesReducer(state = initialState, action) {

    switch(action.type) {
        case types.LOAD_BEER_DIRECTORY_SUCCESS:
            console.log("The state: ", state);
            console.log("The action: ", action);
            return (
                Object.assign({}, state, {beerDirectories: action.beerStyles})
            );

        case types.FETCH_STYLE_CONTENTS_SUCCESS:
            console.log("It worked: ", action);
            return (
                Object.assign({}, state,
                    {currentBeerStyle: {
                        pageNumber: action.pageNumber,
                        styleDescription: action.styleDescription,
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