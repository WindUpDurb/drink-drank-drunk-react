"use strict";

import React, {PropTypes} from "react";
import NavbarContainer from "../common/NavbarContainer";


export const BeerStyleHeaderAndDirectory = ({activeUser}) => {
    return (
        <div className="text-center" id="parallaxContainerStyleContentsDirectory">
            <NavbarContainer
                activeUser={activeUser}
                homePage/>
            <div id="dhnTextDiv">
            </div>
        </div>
    );
};

BeerStyleHeaderAndDirectory.propTypes = {
    activeUser: PropTypes.object
};
