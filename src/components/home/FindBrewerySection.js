"use strict";

import React from "react";
import {Link} from "react-router";

const FindBrewerySection = () => {

    return (
        <div className="text-center" id="parallaxContainerFindBrewery">
            <div id="dddTextDiv">
                <span className="breweryFindSectionText">It's usually about more than</span>
                <br/>
                <span className="breweryFindSectionText">just getting drunk.</span>
            </div>
            <div id="dddButtonDiv">
                <Link to="/breweriesNearby" id="dddButton" className="btn btn-raised">Let's Find You A Brewery</Link>
            </div>
        </div>
    );
};

export default FindBrewerySection;
