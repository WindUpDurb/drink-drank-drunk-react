"use strict";

import React, {PropTypes} from "react";
import NavbarContainer from "../common/NavbarContainer";


export const DirectoryHeaderAndNav = ({activeUser}) => {
    return (
        <div className="text-center" id="parallaxContainerStyleDirectory">
            <NavbarContainer
                activeUser={activeUser}
                homePage/>
            <div id="dhnTextDiv">
            </div>
        </div>
    );
};

DirectoryHeaderAndNav.propTypes = {
    activeUser: PropTypes.object
};
