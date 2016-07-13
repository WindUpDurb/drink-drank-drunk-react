"use strict";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import AuthMiddleware from "../CustomMiddleware/AuthMiddleware";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(thunk, AuthMiddleware.CheckActiveUser, AuthMiddleware.UserOnlyRoute,reduxImmutableStateInvariant()), window.devToolsExtension ? window.devToolsExtension () : f => f)
    );
}
