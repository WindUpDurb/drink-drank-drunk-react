"use strict";

import React from "react";

const FindBrewerySection = () => {

    return (
        <div className="text-center" id="parallaxContainerFindBrewery">
            <div id="dddTextDiv">
                <span className="breweryFindSectionText">It's usually about more than</span>
                <br/>
                <span className="breweryFindSectionText">just getting drunk.</span>
            </div>
            <div id="dddButtonDiv">
                <button id="dddButton" className="btn btn-raised">Let's Find You A Brewery</button>
            </div>
        </div>
    );
};

export default FindBrewerySection;
