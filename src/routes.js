"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";

//Indexroute for the index; so if it is slash, as indicated
//in Route, it'll go HomePage
//if /about, it'll go to the AboutPage
export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
    </Route>
);


/*
export default (
    <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="course" component={ManageCoursePage} />
            <Route path="course/:id" component={ManageCoursePage} />
            <Route path="about" component={AboutPage} />
    </Route>
);*/
