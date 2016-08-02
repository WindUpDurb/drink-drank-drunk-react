"use strict";

import React, {PropTypes} from "react";
import NavbarContainer from "../common/NavbarContainer";


export const BeerSearchHeader = ({query, activeUser}) => {
    let queryString;
    if (query) queryString = query;
    return (
        <div className="text-center" id="parallaxContainerBeerSearch">
            <NavbarContainer
                activeUser={activeUser}
                homePage/>
            <div id="styleDetailsHeader">
                <span>Catch these search results for {queryString}</span>
            </div>
        </div>
    );
};

BeerSearchHeader.propTypes = {
    activeUser: PropTypes.object,
    query: PropTypes.string
};
