"use strict";

import { combineReducers } from "redux";
//import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
    //the property specified here will impact the way it is referred in the rest of the application
    //or short-hand property name of just: `courses`
    //ajaxCallsInProgress: ajaxCallsInProgress
    stuff: "Stuff"
});

export default rootReducer;
