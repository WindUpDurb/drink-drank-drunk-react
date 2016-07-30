"use strict";

import React, {PropTypes} from "react";


const DescriptionSection = () => {
    return (
        <div className="homeDescriptionText container text-center">
            <img src="/statics/beerHome.png"/>
            <h1 className="lineHeightHome">Learn about the beers you drink.</h1>
            <h1 className="lineHeightHome">Remember the beers you've drank.</h1>
            <h3 className="descriptive-text site-text">A plethora of beers at your reach.</h3>
            <h3 className="descriptive-text site-text">A wide menu of styles to choose from.</h3>
            <h3 className="descriptive-text site-text">Or search for any beer.</h3>
            <h3 className="descriptive-text site-text ">Powered by the BreweryDB Database.</h3>
        </div>
    );
};

export default DescriptionSection;