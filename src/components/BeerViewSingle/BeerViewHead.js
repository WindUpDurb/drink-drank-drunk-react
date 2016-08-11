"use strict";

import React, {PropTypes} from "react";
import {SelectBeerRating} from "./SelectBeerRating";

export const BeerViewHead = ({consumed, globalRating, personalRating, updateBeerRating,beerData, activeUser}) => {
    let consumedIcon, beerStatusInDB, rateBeer, overallRating, beerRating;
    if (personalRating) beerRating =  <span><span>Personal Rating: </span> <span id="personalRating">{personalRating}</span></span>;
    if (globalRating) overallRating = globalRating;
    if (!globalRating && activeUser) overallRating = "Be the first to rate.";
    if (!globalRating && !activeUser) overallRating = "Login and be the first to rate.";
    if (activeUser && consumed) {
        consumedIcon = <img data-toggle="tooltip" data-placement="bottom" title="You've Drank this Beer" src="/statics/beerIconConsumed64.png"/>;
        rateBeer = <SelectBeerRating initialRating={personalRating} updateBeerRating={updateBeerRating}/>;
    } else if (activeUser && !consumed) {
        consumedIcon = <img data-toggle="tooltip" data-placement="bottom" title="You've Yet to Drink this Beer" src="/statics/beerIconNoConsumed64.png" />;
        rateBeer = <span>Try this beer before you rate it.</span>;
    }
    if(beerData && beerData.status === "verified") {
        beerStatusInDB = <img data-toggle="tooltip" data-placement="bottom" title="Beer Verified in Database" src="/statics/thumbUp64.png"/>;
    } else {
        beerStatusInDB = <img data-toggle="tooltip" data-placement="bottom" title="Beer Not Verified in Database" src="/statics/updatePending64.png"/>;
    }
    if (activeUser) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-4 col-xs-offset-8 col-md-2 col-md-offset-10">
                        {beerStatusInDB}
                        {consumedIcon}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-8 col-md-3">
                        <span>Overall Rating:</span>
                        <span id="globalRating">{overallRating}</span>
                        <br/>
                        {beerRating}
                    </div>
                </div>

                <div className="row">
                    <div className="form-group">
                        <div className="col-xs-8 col-md-4">
                            <label className="control-label">Rate this beer:</label>
                            {rateBeer}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row"></div>
            <div className="col-xs-4 col-xs-offset-8 col-md-2 col-md-offset-10">
                {beerStatusInDB}
                {consumedIcon}
            </div>
            <div className="row">
                <div className="col-xs-8 col-md-3">
                    <span>Overall Rating:</span>
                    <span id="globalRating">{overallRating}</span>
                </div>
            </div>
            <div className="row">
            </div>
        </div>
    );

};

BeerViewHead.propTypes = {
    personalRating: PropTypes.number,
    updateBeerRating: PropTypes.func.isRequired,
    consumed: PropTypes.bool,
    beerData: PropTypes.object,
    activeUser: PropTypes.object,
    globalRating: PropTypes.number
};



