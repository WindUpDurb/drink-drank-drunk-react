"use strict";

import React from "react";
import { Route, IndexRoute, IndexRedirect } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import BeerSearchPage from "./components/BeerSearch/BeerSearchPage";
import BeerStyleDirectory from "./components/BeerStyleDirectory/BeerStyleDirectoryPage";
import BeerStylePage from "./components/BeerStyle/BeerStylePage";
import BeerViewPage from "./components/BeerViewSingle/SingleBeerPage";
import ProfilePage from "./components/Profile/ProfilePage";
import BreweriesNearbyPage from "./components/BreweriesNearby/BreweriesNearbyPage";
import toastr from "toastr";

export const generateRoutes = (store) => {
    const checkIfActiveUser = (nextState, replace) => {
        let activeUser;
        if (store) {
            activeUser = store.getState().userAndAuth;
        }

        if (!activeUser) {
            replace({pathname: "/"});
            if(!localStorage.profile) {
                toastr.info("Please login for access.");
            }
        }
    };

    return (
        <Route path="/" component={App}>
            <IndexRedirect to="/home"/>
            <Route path="/home" component={HomePage} />
            <Route path="/beerStyles" component={BeerStyleDirectory}/>
            <Route path="/breweriesNearby" component={BreweriesNearbyPage}/>
            <Route path="/beerSearch" component={BeerSearchPage}/>
            <Route path="/beerStyles/:style/:page" component={BeerStylePage}/>
            <Route path="/profile" component={ProfilePage} onEnter={checkIfActiveUser}/>
            <Route path="/beer/:beerId" component={BeerViewPage}/>
        </Route>
    );

};

