"use strict";

import React, {PropTypes} from "react";
import {BreweryResult} from "./BreweryResult";

export const NearbyResultsHeader = ({breweries}) => {
    const breweryResults = breweries.businesses.map((brewery, index) => <BreweryResult brewery={brewery} key={index}/>);
    return (
        <div className="container">
            <div className="col-sm-offset-1">
                <h3 className="greyText">Here are some local breweries nearby.</h3>
                {breweryResults}
            </div>
        </div>
    );

};

NearbyResultsHeader.propTypes = {
    breweries: PropTypes.object
};