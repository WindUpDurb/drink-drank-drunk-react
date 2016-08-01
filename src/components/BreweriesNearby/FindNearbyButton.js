"use strict";

import React, {PropTypes} from "react";
import {CustomSearch} from "./SearchButtonAndInput";
import toastr from "toastr";

export const FindNearbyButton = ({search, toggleSearch, updateSearchState, submitSearch}) => {
    let findNearby = () => toastr.info("Searches by Geolocation are temporarily nonfunctional. Please do a custom search.");
    return (
        <div className="row">

                <button onClick={findNearby}
                        className="btn btn-raised"
                        id="findNearbyButton">Find Nearby Breweries</button>
                <CustomSearch
                    submitSearch={submitSearch}
                    updateSearchState={updateSearchState}
                    toggleSearch={toggleSearch}
                    search={search}/>
        </div>
    );
};

FindNearbyButton.propTypes = {
    toggleSearch: PropTypes.func.isRequired,
    updateSearchState: PropTypes.func.isRequired,
    submitSearch: PropTypes.func.isRequired,
    search: PropTypes.bool
};