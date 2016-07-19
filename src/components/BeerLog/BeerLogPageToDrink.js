"use strict";

import React, {PropTypes} from "react";
import ListedBeer from "../common/ListedBeer";

function countToDrinks(toDrinks) {
     let toReturn = {
            drank: 0,
            haveNotDrank: 0,
            totalInToDrink: 0
        };
        for (let i = 0; i < toDrinks.length; i++) {
            if (toDrinks[i].finallyDrank) {
                toReturn.drank++;
                toReturn.totalInToDrink++;
            } else {
                toReturn.haveNotDrank++;
                toReturn.totalInToDrink++;
            }
        }
        return toReturn;
}

export const BeerLogPageToDrink = ({toDrinks}) => {
    let toDrinksStats;
    if (toDrinks.length) {
        toDrinksStats = countToDrinks(toDrinks);
    }
    return (
        <div>
            <div id="toDrinkDiv" className="row">
                <div className="col-sm-5 col-sm-offset-2">
                    <p className="greyText toDrinkHeading">Aspire for grand beer ambitions.</p>
                </div>
            </div>
            <div className="row">
                <div className="greyText col-sm-6 col-sm-offset-3">
                        <p className="toDrinkStatText">There are <span className="colorStat"><b>{toDrinksStats.totalInToDrink}</b></span> beers in your To-Drink list.</p>
                        <p className="toDrinkStatText">You've crossed <span className="colorStat"><b>{toDrinksStats.drank}</b></span> off your list.</p>
                        <p className="toDrinkStatText">And there are a total of <span className="colorStat"><b>{toDrinksStats.haveNotDrank}</b></span> beers left unconquered.</p>
                </div>
            </div>
            <div className="subjectBreak container-fluid"></div>
            <div className="container-fluid">
                <div className="container">
                    {toDrinks.map((beer, index) => <ListedBeer key={index} beerDetails={beer}/>)}
                </div>
            </div>
        </div>

    );
};

BeerLogPageToDrink.propTypes = {
    toDrinks: PropTypes.array
};