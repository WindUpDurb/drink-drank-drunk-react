"use strict";

import React, {PropTypes} from "react";
import NavbarContainer from "../common/NavbarContainer";


export const BeerStyleHeaderAndDirectory = ({styleData, activeUser}) => {
    console.log("The dsdkjfs: ", styleData)
    let styleName;
    if (styleData) {
        styleName = styleData.name;
    }
    return (
        <div className="text-center" id="parallaxContainerStyleContentsDirectory">
            <NavbarContainer
                activeUser={activeUser}
                homePage/>
            <div id="styleDetailsHeader">
                {styleName}
            </div>
        </div>
    );
};

BeerStyleHeaderAndDirectory.propTypes = {
    activeUser: PropTypes.object,
    styleData: PropTypes.object
};
