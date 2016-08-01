"use strict";

import React, {PropTypes} from "react";
import NavbarContainer from "../common/NavbarContainer";
import {FindNearbyButton} from "./FindNearbyButton";

export const BreweriesNearbyHeaderAndNav = ({toggleSearch, search, updateSearchState, submitSearch, activeUser}) => {
    return (
        <div id="parallaxContainerBreweriesNearby">
            <NavbarContainer
                activeUser={activeUser}
                homePage/>
            <div id="searchForBreweryCard" className="container text-center">
                <div className="row">
                    <div className="well col-sm-4 col-sm-offset-4" id="activeUserCard">
                        <img src="/statics/bar-sign.png"/>
                        <FindNearbyButton
                            toggleSearch={toggleSearch}
                            search={search}
                            updateSearchState={updateSearchState}
                            submitSearch={submitSearch}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

BreweriesNearbyHeaderAndNav.propTypes = {
    activeUser: PropTypes.object,
    toggleSearch: PropTypes.func,
    search: PropTypes.bool,
    updateSearchState: PropTypes.func,
    submitSearch: PropTypes.func
};
