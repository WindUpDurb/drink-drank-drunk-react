"use strict";

import React, {PropTypes} from "react";
import ListedBeer from "../common/ListedBeer";

function generateDrankStatistics (drinkData) {
    // Look into saving more data, such as the type of Beer drank
    // so that we can offer statistics on the commonly consumed beer,
    // most and least favorite by type and so on
    let drankStatistics = {
        beersDrank: drinkData.length,
        highestRatedBeer: 0,
        lowestRatedBeer: 10,
        averageRatedBeer: 0
    };
    let sumOfAllBeers = 0;
    for (let i = 0; i < drinkData.length; i++) {
        if (drinkData[i].beerRating < drankStatistics.lowestRatedBeer) {
            drankStatistics.lowestRatedBeer = drinkData[i].beerRating;
        }
        if (drinkData[i].beerRating > drankStatistics.highestRatedBeer) {
            drankStatistics.highestRatedBeer = drinkData[i].beerRating;
        }
        sumOfAllBeers += drinkData[i].beerRating;
    }
    drankStatistics.averageRatedBeer = Math.floor(sumOfAllBeers /= drinkData.length);
    return drankStatistics;
}

export const BeerLogPageDrank = ({beersDrank}) => {
    if (beersDrank.length) {
        let drankStats = generateDrankStatistics(beersDrank);

        return (
            <div>
                <div id="drankStats" className="row">
                    <div className="col-sm-5 col-sm-offset-2">
                        <p className="greyText toDrinkHeading">Look here at all you've drank.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="greyText col-sm-5 col-sm-offset-3">
                        <p className="toDrinkStatText">You've drank a total of <span className="colorStat"><b>{drankStats.beersDrank}</b></span> different beers.</p>
                        <p className="toDrinkStatText">The highest rated beer, based on your just evaluation, is a <span className="colorStat"><b>{drankStats.highestRatedBeer}</b></span>.</p>
                        <p className="toDrinkStatText">The lowest rated beer earned a well-deserved <span className="colorStat"><b>{drankStats.lowestRatedBeer}</b></span>.</p>
                        <p className="toDrinkStatText">Your average rating for beers is <span className="colorStat"><b>{drankStats.averageRatedBeer}</b></span>.</p>
                    </div>
                </div>
                <div className="subjectBreak container-fluid"></div>
                <div className="container-fluid">
                    <div className="container">
                        {beersDrank.map((beer, index) => <ListedBeer key={index} beerDetails={beer}/>)}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-offset-2 col-sm-5">
                        <span className="beerLogHaventText">I remember my first beer. Beers that you've drank will be here.</span>
                    </div>
                </div>
            </div>
        );
    }

};

BeerLogPageDrank.propTypes = {
    beersDrank: PropTypes.array
};