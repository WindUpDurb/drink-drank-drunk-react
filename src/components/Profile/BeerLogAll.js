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
    console.log("chekkkkkkk: ", extractAllBeers(beerAndUserData))
    let allBeer = (
        extractAllBeers(beerAndUserData))
        .map((beer, index) => <ListedBeer key={index} beerData={beer} />)
    ;
    return (
        <div>
            {allBeer}
        </div>
    );
};

BeerLogAll.propTypes = {
    beerAndUserData: PropTypes.object.isRequired
};