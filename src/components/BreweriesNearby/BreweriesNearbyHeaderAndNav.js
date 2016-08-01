"use strict";

import React, {PropTypes} from "react";
import NavbarContainer from "../common/NavbarContainer";
import {FindNearbyButton} from "./FindNearbyButton";
import toast from "toastr";

export const BreweriesNearbyHeaderAndNav = ({toggleSearch, search, updateSearchLocationState, submitSearch, lookupNearbyBreweries, activeUser}) => {
    const notify = (event) => toast.info(event.target.name);
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
                            updateSearchState={updateSearchLocationState}
                            submitSearch={submitSearch}
                            findNearby={lookupNearbyBreweries}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

BreweriesNearbyHeaderAndNav.propTypes = {
    activeUser: PropTypes.object,
    toggleSearch: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    updateSearchLocationState: PropTypes.func.isRequired,
    submitSearch: PropTypes.func.isRequired,
    findNearby: PropTypes.func.isRequired
};
