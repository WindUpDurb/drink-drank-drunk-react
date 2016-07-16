"use strict";

import React, {PropTypes} from "react";
import ListedBeer from "../common/ListedBeer";

export const BeerLogPageToDrink = ({toDrinks}) => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-5 col-sm-offset-2">
                    <p className="greyText toDrinkHeading">Ah. Your To-Drinks.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5 col-sm-offset-2">
                    <p className="text-center toDrinkSubHeading">Aspire for grand beer ambitions and construct an extensive list.</p>
                </div>
            </div>
            <div className="row">
                <div className="greyText col-sm-5 col-sm-offset-3">
                    <p className="toDrinkStatText">Let's tally up your aspirations.</p>
                    <br/>
                        <p className="toDrinkStatText">There are <span className="colorStat"><b>{}</b></span> beers in your To-Drink list.</p>
                        <p className="toDrinkStatText">You've crossed <span className="colorStat"><b>{}</b></span> off your list.</p>
                        <p className="toDrinkStatText">And there are a total of <span className="colorStat"><b>{}</b></span> beers left unconquered.</p>
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