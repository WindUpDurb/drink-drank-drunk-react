"use strict";

import React, {PropTypes} from "react";
import {CustomSearch} from "./SearchButtonAndInput";


export const FindNearbyButton = ({search, toggleSearch, updateSearchState, submitSearch, findNearby}) => {
    return (
        <div className="row" id="findNearbyRow">
            <div className="col-sm-offset-5 col-sm-3">
                <button onClick={findNearby}
                        className="btn btn-raised"
                        id="findNearbyButton">Find Nearby Breweries</button>
                <CustomSearch
                    submitSearch={submitSearch}
                    updateSearchState={updateSearchState}
                    toggleSearch={toggleSearch}
                    search={search}/>
            </div>
        </div>
    );
};

FindNearbyButton.propTypes = {
    findNearby: PropTypes.func.isRequired,
    toggleSearch: PropTypes.func.isRequired,
    updateSearchState: PropTypes.func.isRequired,
    submitSearch: PropTypes.func.isRequired,
    search: PropTypes.bool
};