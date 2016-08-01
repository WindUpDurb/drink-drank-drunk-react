"use strict";

import React, {PropTypes} from "react";
import {ListedBeer} from "../common/ListedBeer";

function extractAllBeers (beerAndUserData) {
    let toReturn = [];
    if (beerAndUserData.sampledBeers.length) {
        for (let i = 0; i < beerAndUserData.sampledBeers.length; i++) {
            beerAndUserData.sampledBeers[i].drank = true;
            toReturn.push(beerAndUserData.sampledBeers[i]);
        }
    }
    if (beerAndUserData.toDrink.length) {
        for (let i = 0; i < beerAndUserData.toDrink.length; i++) {
            beerAndUserData.toDrink[i].toDrink = true;
            toReturn.push(beerAndUserData.toDrink[i]);
        }
    }
    return toReturn;
}

export const BeerLogAll = ({beerAndUserData}) => {
    let allBeer = (
        extractAllBeers(beerAndUserData))
        .map((beer, index) => {
            console.log("Beer: '", beer);
            if (beer.drank) {
                return <ListedBeer drank key={index} beerData={beer} />;
            } else {
                return <ListedBeer key={index} beerData={beer} />;
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
    beerAndUserData: PropTypes.object.isRequired
};