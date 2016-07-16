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

export const BeerViewHead = ({consumed, personalRating, updateBeerRating,beerData, activeUser}) => {
    let consumedIcon;
    let beerStatusInDB;
    let rateBeer;
    let beerRating = generateArrayForRating(personalRating);
    if (consumed) {
        consumedIcon = <span className="pull-right"><img src="/statics/beerIconConsumed64.png"/></span>;
        rateBeer = <SelectBeerRating initialRating={personalRating} updateBeerRating={updateBeerRating}/>;
        beerRating = beerRating.map((number, index) => <BeerRatingIcon key={index}/>);
    } else {
        consumedIcon = <span className="pull-right"><img src="/statics/beerIconNoConsumed64.png" /></span>;
        rateBeer = <span>First you have to try this beer</span>;
    }
    if(beerData.status === "verified") {
        beerStatusInDB = <span className="pull-right"><img src="/statics/thumbUp64.png"/></span>;
    } else {
        beerStatusInDB = <span className="pull-right"><img src="/statics/updatePending64.png"/></span>;
    }

    if (activeUser) {
        console.log("LEngth: ", beerRating)
        return (
            <div className="container">
                <div className="row">
                    {beerRating}
                </div>
                {beerStatusInDB}
                {consumedIcon}
                <div className="row">
                    <div className="form-group">
                        <div className="col-sm-1">
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
            <span className="pull-right"><img src="/statics/updatePending64.png"/></span>
            <span className="pull-right"><img src="/statics/thumbUp64.png"/></span>
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
    activeUser: PropTypes.object
};



