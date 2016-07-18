"use strict";

import { combineReducers } from "redux";
import beerDirectoriesReducer from "./beerDirectoriesReducer";
import userAndAuthReducer from "./userAndAuthReducer";
import breweriesReducer from "./breweriesReducer";
import beerSearchReducer from "./beerSearchReducer";
import requestStatusReducer from "./requestStatusReducer";

const rootReducer = combineReducers({
    //the property specified here will impact the way it is referred in the rest of the application
    //or short-hand property name of just: `courses`
    //ajaxCallsInProgress: ajaxCallsInProgress
    beerDirectories: beerDirectoriesReducer,
    userAndAuth: userAndAuthReducer,
    breweryResults: breweriesReducer,
    beerSearch: beerSearchReducer
   // requestStatusReducer: requestStatusReducer
});

export default rootReducer;
