"use strict";

import React, {PropTypes} from "react";

export const ListedBeer = ({beerData}) => {
    let breweryName;
    if (beerData.breweries && beerData.breweries[0]) {
        breweryName = beerData.breweries[0].name;
    }
    return (
        <div className="col-sm-4 col-sm-offset-1 well text-center beerCard">
            <img src={beerData.labels.medium}/>
            <span>{beerData.name}</span>
            <br/>
            <span>{breweryName || "Brewery data is unavailable."}</span>
        </div>
    );
};

ListedBeer.propTypes = {
    beerData: PropTypes.object.isRequired
};

