"use strict";

import React, {PropTypes} from "react";
import ListedBeer from "../common/ListedBeer";

export const BeerLogPageDrank = ({beersDrank}) => {
    console.log("Active user in here: ", beersDrank);
    return (
        <div>
            <div className="row">
                <div className="col-sm-5 col-sm-offset-2">
                    <p className="greyText toDrinkHeading">Look, here, at all you've drank.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 col-sm-offset-2">
                    <p className="text-center toDrinkSubHeading">Oh, there will be more. There will be more.</p>
                </div>
            </div>
            <div className="row">
                <div className="greyText col-sm-5 col-sm-offset-3">
                    <p className="toDrinkStatText">Let's see all that has crossed your path.</p>
                    <br/>
                        <p className="toDrinkStatText">You've drank a total of <span className="colorStat"><b>{}</b></span> different beers.</p>
                        <p className="toDrinkStatText">The highest rated beer, based on your just evaluation, is a <span className="colorStat"><b>{}</b></span>.</p>
                        <p className="toDrinkStatText">The lowest rated beer earned a well-deserved <span className="colorStat"><b>{}</b></span>.</p>
                        <p className="toDrinkStatText">Your average rating for beers is <span className="colorStat"><b>{}</b></span>.</p>
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
};

BeerLogPageDrank.propTypes = {
    beersDrank: PropTypes.array
};