"use strict";

import React, {PropTypes} from "react";
import {SelectBeerRating} from "./SelectBeerRating";
import {BeerRatingIcon} from "./BeerRatingIcon.js";

const generateArrayForRating = (rating) => {
    let ratingArray = [];
    for (let i = 1; i <= rating; i++) {
        ratingArray.push(i);
    }
    return ratingArray;
};

export const BeerViewHead = ({consumed, globalRating, personalRating, updateBeerRating,beerData, activeUser}) => {
    let consumedIcon, beerStatusInDB, rateBeer, overallRating, beerRating;
    // let beerRating = generateArrayForRating(personalRating);
    if (personalRating) {
        beerRating =  <span><span>Personal Rating: </span> <span id="personalRating">{personalRating}</span></span>;
    }
    if (globalRating) {
        overallRating = globalRating;
    } else if (!globalRating && activeUser) {
        overallRating = "Be the first to rate.";
    } else if (!globalRating && !activeUser) {
        overallRating = "Login and be the first to rate.";
    }
    if (consumed) {
        consumedIcon = <span className="pull-right"><img src="/statics/beerIconConsumed64.png"/></span>;
        rateBeer = <SelectBeerRating initialRating={personalRating} updateBeerRating={updateBeerRating}/>;

        // beerRating = beerRating.map((number, index) => <BeerRatingIcon key={index}/>);
    } else {
        consumedIcon = <span className="pull-right"><img src="/statics/beerIconNoConsumed64.png" /></span>;
        rateBeer = <span>Try this beer before you rate it.</span>;
    }
    if(beerData.status === "verified") {
        beerStatusInDB = <span className="pull-right"><img src="/statics/thumbUp64.png"/></span>;
    } else {
        beerStatusInDB = <span className="pull-right"><img src="/statics/updatePending64.png"/></span>;
    }

    if (activeUser) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 col-sm-offset-10">
                        {beerStatusInDB}
                        {consumedIcon}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <span>Overall Rating:</span>
                        <span id="globalRating">{overallRating}</span>
                        <br/>
                        {beerRating}
                    </div>
                </div>

                <div className="row">
                    <div className="form-group">
                        <div className="col-sm-4">
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
            <div className="col-sm-2 col-sm-offset-10">
                {beerStatusInDB}
                {consumedIcon}
            </div>
            <div className="row">
                <div className="col-sm-4">
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
    beerData: PropTypes.object.isRequired,
    activeUser: PropTypes.object,
    globalRating: PropTypes.number
};



