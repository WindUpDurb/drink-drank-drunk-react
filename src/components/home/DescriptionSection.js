"use strict";

import React, {PropTypes} from "react";
import { Link } from "react-router";


const DescriptionSection = ({login}) => {

    return (
        <div id="homeDescriptionText" className="container text-center">
            <img src="/statics/beerHome.png"/>
                    <h1 className="lineHeightHome">Learn about the beers you drink.</h1>
                    <h1 className="lineHeightHome">And remember the beers you've drank.</h1>
                        <h3 className="descriptive-text site-text ">Log your favorite beers</h3>
                        <h3 className="descriptive-text site-text">Rate the beers you've conquered</h3>
                        <h3 className="descriptive-text site-text">Record the beers you aim to consume</h3>

            <div id="homeRegisterButton">
                <a onClick={login} className="btn btn-raised default">Login with Google</a>
            </div>
        </div>
    );
};

DescriptionSection.propTypes = {
    login: PropTypes.func.isRequired
};


export default DescriptionSection;