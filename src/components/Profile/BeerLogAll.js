"use strict";

import React, {PropTypes} from "react";
import {ListedBeer} from "../common/ListedBeer";

function extractAllBeers (beerAndUserData) {
    let toReturn = [];
    if (beerAndUserData.sampledBeers.length) {
        toReturn = [...beerAndUserData.sampledBeers];
    }
    if (beerAndUserData.toDrink.length) {
        toReturn.push(...beerAndUserData.toDrink);
    }
    return toReturn;
}

export const BeerLogAll = ({setBeer, beerAndUserData}) => {
    let allBeer = (
        extractAllBeers(beerAndUserData))
        .map((beer, index) => {
            if (beer.drank) {
                return <ListedBeer setBeer={setBeer} drank key={index} beerData={beer} />;
            } else {
                return <ListedBeer setBeer={setBeer} key={index} beerData={beer} />;
            }
        })
    ;
    return (
        <div id="profileMenuDiv" className="well col-sm-10 col-sm-offset-1">
            {allBeer}
        </div>
    );
};

BeerLogAll.propTypes = {
    setBeer: PropTypes.func.isRequired,
    beerAndUserData: PropTypes.object.isRequired
};