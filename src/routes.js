"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import BeerStyleDirectory from "./components/BeerStyleDirectory/BeerStyleDirectoryPage";
import BeerStylePage from "./components/BeerStyle/BeerStylePage";
import BeerViewPage from "./components/BeerViewSingle/SingleBeerPage";
import RegisterPage from "./components/UserAndAuthComponents/registerPage";
import LoginPage from "./components/UserAndAuthComponents/LoginPage";

//Indexroute for the index; so if it is slash, as indicated
//in Route, it'll go HomePage
//if /about, it'll go to the AboutPage
export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="beerStyles" component={BeerStyleDirectory}/>
        <Route path="/beerStyles/:style" component={BeerStylePage}/>
        <Route path="/beer/:beerId" component={BeerViewPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/login" component={LoginPage}/>
    </Route>
);

