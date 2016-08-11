"use strict";
/*eslint-disable import/default */

//In "Update Entry Point" Chapter

import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore.dev";
import {Provider} from "react-redux";
import { Router, applyRouterMiddleware, browserHistory } from "react-router";
import useScroll from "react-router-scroll";
import {generateRoutes} from "./routes";
import {loadBeerDirectory} from "./actions/BeerActions";
import "../node_modules/jquery/dist/jquery.min";
import "./styles/styles.css"; //Webpack can also import CSS files;
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/toastr/build/toastr.min.css";
//material bootstrap
import "../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import "../node_modules/bootstrap-material-design/dist/css/ripples.min.css";
import "../node_modules/bootstrap-material-design/dist/js/material.min";
import "../node_modules/bootstrap-material-design/dist/js/ripples.min";


const store = configureStore();

store.dispatch(loadBeerDirectory());
store.dispatch({type: "CHECK_ACTIVE_USER"});

render(
    <Provider store={store}>
        <Router
            history={browserHistory}
            routes={generateRoutes(store)}
            render={applyRouterMiddleware(useScroll())}/>
    </Provider>,
    document.getElementById("app")
);

export default store;