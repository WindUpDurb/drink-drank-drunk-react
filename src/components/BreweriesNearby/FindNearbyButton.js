"use strict";

import React, {PropTypes} from "react";
import {CustomSearch} from "./SearchButtonAndInput"


export const FindNearbyButton = ({findNearby}) => {

    return (
        <div className="row" id="findNearbyRow">
            <div className="col-sm-offset-5 col-sm-2">
                <button onClick={findNearby} className="btn btn-raised" id="findNearbyButton">Find Nearby Breweries</button>
                <CustomSearch />
            </div>
        </div>
    );
};

FindNearbyButton.propTypes = {
    findNearby: PropTypes.func.isRequired
};