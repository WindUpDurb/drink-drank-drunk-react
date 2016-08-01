"use strict";

import React, {PropTypes} from "react";
import {BreweryResult} from "./BreweryResult";

export const NearbyResultsHeader = ({breweries}) => {
    const breweryResults = breweries.map((brewery, index) => <BreweryResult brewery={brewery} key={index}/>);
    return (
        <div id="profileMenuDiv" className="well col-sm-10 col-sm-offset-1">
            {breweryResults}
        </div>
    );

};

NearbyResultsHeader.propTypes = {
    breweries: PropTypes.array
};