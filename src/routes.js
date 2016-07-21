"use strict";

import React from "react";
import { Route, browserHistory, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import BeerSearchPage from "./components/BeerSearch/BeerSearchPage";
import BeerStyleDirectory from "./components/BeerStyleDirectory/BeerStyleDirectoryPage";
import BeerStylePage from "./components/BeerStyle/BeerStylePage";
import BeerViewPage from "./components/BeerViewSingle/SingleBeerPage";
import RegisterPage from "./components/UserAndAuthComponents/registerPage";
import LoginPage from "./components/UserAndAuthComponents/LoginPage";
import BeerLogPage from "./components/BeerLog/BeerLogPage";
import BreweriesNearbyPage from "./components/BreweriesNearby/BreweriesNearbyPage";
import store from "./index";
import toastr from "toastr";

const checkIfActiveUser = (nextState, replace) => {
    let activeUser;
    if (store) {
        activeUser = store.getState().userAndAuth || null;
    }

    if (!activeUser) {
        replace({pathname: "/"});
        if(!localStorage.profile) {
            toastr.info("Please login for access.");
        }
    }
};

export default (
    <Route path="/" component={App}>
            <IndexRoute component={HomePage} />

            <Route path="/beerStyles" component={BeerStyleDirectory}/>
            <Route path="/breweriesNearby" component={BreweriesNearbyPage}/>
            <Route path="/beerSearch" component={BeerSearchPage}/>
            <Route path="/beerStyles/:style/:page" component={BeerStylePage}/>
            <Route path="/beerLog" component={BeerLogPage} onEnter={checkIfActiveUser}/>
            <Route path="/beer/:beerId" component={BeerViewPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/login" component={LoginPage}/>
    </Route>
);
