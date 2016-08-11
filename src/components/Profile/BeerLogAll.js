"use strict";

import React, {PropTypes} from "react";
import {ListedBeer} from "../common/ListedBeer";
import {BeerLogFilter} from "./BeerLogFilter";

export const BeerLogAll = ({setBeer, onlyToDrinks, toggleCheckbox, filterThroughBeers, onlyDranks, beerData}) => {
    let allBeer;
    if (beerData.length) {
        allBeer = (
            beerData.map((beer, index) => {
                if (beer.drank) {
                    return <ListedBeer setBeer={setBeer} inProfile drank key={index} beerData={beer}/>;
                } else {
                    return <ListedBeer setBeer={setBeer} inProfile key={index} beerData={beer}/>;
                }
            })
        );
    } 
    if (!beerData.length) allBeer = (
        <div className="text-center noBeersFilterDiv">
            <span className="noBeersFilter">There are no beers with this search criteria</span>
        </div>
    );
    return (
        <div id="profileMenuDiv" className="well col-sm-10 col-sm-offset-1">
            <BeerLogFilter
                filterThroughBeers={filterThroughBeers}
                toggleCheckbox={toggleCheckbox}
                onlyToDrinks={onlyToDrinks}
                onlyDranks={onlyDranks}/>
            <div className="padding5 row">
                <div className="col-md-5 col-md-offset-3 greyBB"></div>
            </div>
            {allBeer}
        </div>
    );
};

BeerLogAll.propTypes = {
    setBeer: PropTypes.func.isRequired,
    toggleCheckbox: PropTypes.func.isRequired,
    filterThroughBeers: PropTypes.func.isRequired,
    beerData: PropTypes.array.isRequired,
    onlyToDrinks: PropTypes.bool,
    onlyDranks: PropTypes.bool
};