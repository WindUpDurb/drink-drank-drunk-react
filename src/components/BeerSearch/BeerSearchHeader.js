"use strict";

import React, {PropTypes} from "react";

export const BeerSearchHeader = ({query}) => {
    console.log("Query in here: ", query)
    return (
    <div id="beerSearchHeader" className="row">
        <div className="col-sm-4 col-sm-offset-2">
            <h3 className="greyText">Beer Search Results for {query}:</h3>
            <div id="beerSearchDivider" className="subjectBreakListedBeer container-fluid"></div>
        </div>
    </div>
    );
};

BeerSearchHeader.propTypes = {
    query: PropTypes.string
};