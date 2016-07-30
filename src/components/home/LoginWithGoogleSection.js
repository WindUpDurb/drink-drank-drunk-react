"use strict";

import React, {PropTypes} from "react";


const LoginWithGoogleSection = () => {
    return (
        <div className="container text-center homeDescriptionText">
            <img src="/statics/beerHome.png"/>
            <h1 className="lineHeightHome">Sign in with your Google account.</h1>
            <h3 className="descriptive-text site-text ">Log and rate your favorites</h3>
            <h3 className="descriptive-text site-text">Record the beers you want to try</h3>
            <h3 className="descriptive-text site-text">Record the beers you aim to consume</h3>
        </div>
    );
};

export default LoginWithGoogleSection;