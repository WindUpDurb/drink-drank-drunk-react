"use strict";

import React, {PropTypes} from "react";
import NavbarContainer from "../common/NavbarContainer";


export const BeerViewSingleHeaderAndDirectory = ({activeUser}) => {
    return (
        <div className="text-center" id="parallaxContainerSingleBeerView">
            <NavbarContainer
                activeUser={activeUser}
                homePage/>
            <div id="dhnTextDiv">
            </div>
        </div>
    );
};

BeerViewSingleHeaderAndDirectory.propTypes = {
    activeUser: PropTypes.object
};
