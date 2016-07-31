"use strict";

import React, {PropTypes} from "react";

export const ListedBeer = ({setBeer, beerData}) => {
    const setAndTransition = () => setBeer(beerData);
    let breweryName;
    if (beerData.breweries && beerData.breweries[0]) {
        breweryName = beerData.breweries[0].name;
    }
    return (
        <div className="col-sm-4 col-sm-offset-1 well text-center beerCard">
            <img className="beerCardImage" onClick={setAndTransition} src={beerData.labels.medium}/>
            <span onClick={setAndTransition} className="beerCardBeerName">{beerData.name}</span>
            <br/>
            <span className="beerCardBreweryName">{breweryName || "Brewery data is unavailable."}</span>
        </div>
    );
};

ListedBeer.propTypes = {
    beerData: PropTypes.object.isRequired,
    setBeer: PropTypes.func
};

