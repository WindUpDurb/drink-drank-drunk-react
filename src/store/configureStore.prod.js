"use strict";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import AuthMiddleware from "../CustomMiddleware/AuthMiddleware";
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, loadingBarMiddleware(), AuthMiddleware.CheckActiveUser, AuthMiddleware.UserOnlyRoute)
    );
}
