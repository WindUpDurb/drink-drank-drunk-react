"use strict";

import React, {PropTypes} from "react";
import {ListedBeer} from "../common/ListedBeer";

export const BeerSearchResults = ({setBeer, searchResults}) => {
    let searchResultsElements;
    if (searchResults && searchResults.length) {
        searchResultsElements = searchResults.map((beer, index) => <ListedBeer setBeer={setBeer} key={index} beerData={beer}/>);
    }
    return (
        <div id="beerDirectoryBody">
            <div className="container">
                <div className="row">
                    <div id="directoryMenuDiv" className="well col-sm-10 col-sm-offset-1">
                        {searchResultsElements}
                    </div>
                </div>
            </div>
        </div>
    );
};

BeerSearchResults.propTypes = {
    searchResults: PropTypes.array,
    setBeer: PropTypes.func.isRequired
};
