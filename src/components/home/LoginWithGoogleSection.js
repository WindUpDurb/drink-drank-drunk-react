"use strict";

import React, {PropTypes} from "react";


const LoginWithGoogleSection = () => {
    return (
        <div className="container text-center homeDescriptionText">
            <img src="/statics/google-logo.png"/>
            <h1 className="lineHeightHome">Sign in with your Google account.</h1>
            <h3 className="descriptive-text site-text ">Rate your favorites</h3>
            <h3 className="descriptive-text site-text">Log the beers you've drunk</h3>
            <h3 className="descriptive-text site-text">Record the beers you aim to consume</h3>
        </div>
    );
};

export default LoginWithGoogleSection;