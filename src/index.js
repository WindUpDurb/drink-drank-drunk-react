"use strict";
/*eslint-disable import/default */

//In "Update Entry Point" Chapter

import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore.dev";
import {Provider} from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import {loadBeerDirectory} from "./actions/BeerActions";
import "../node_modules/jquery/dist/jquery.min";
import "./styles/styles.css"; //Webpack can also import CSS files;
import "../node_modules/react-bootstrap/dist/react-bootstrap.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";
import "../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
//import "../node_modules/bootstrap-material-design/dist/js/material.min";
const store = configureStore();

//store.dispatch(loadCourses());
store.dispatch(loadBeerDirectory());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById("app")
);