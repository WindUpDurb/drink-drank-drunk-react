"use strict";

import React, {PropTypes} from "react";

export const ListedBeer = ({drank, setBeer, beerData}) => {
    const setAndTransition = () => setBeer(beerData);
    let breweryName, drankIcon, beerImage;
    if (beerData.breweries && beerData.breweries[0]) {
        breweryName = beerData.breweries[0].name;
    }
    if (beerData.labels && beerData.labels.medium) {
        beerImage = beerData.labels.medium;
    } else {
        beerImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
    }
    if (drank) {
        drankIcon = <img data-toggle="tooltip" data-placement="bottom" title="Beer Drank" data-original-title="Tooltip on bottom" src="/statics/beerIconConsumed32.png"/>;
    } else {
        drankIcon = <img data-toggle="tooltip" data-placement="bottom" title="Yet to Drink" data-original-title="Tooltip on bottom" src="/statics/beerIconNoConsumed32.png"/>;
    }
    return (
        <div className="col-sm-4 col-sm-offset-1 well text-center beerCard">
            <img className="beerCardImage" onClick={setAndTransition} src={beerData.beerImage || beerImage}/>
            <br/>
            <span onClick={setAndTransition} className="beerCardBeerName">{beerData.name || beerData.beerName}</span>
            <br/>
            <span className="beerCardBreweryName">{breweryName || beerData.breweryName || "Brewery data is unavailable."}</span>
            <div className="row">
                <div className="col-sm-2 col-sm-offset-9">
                    {drankIcon}
                </div>
            </div>
        </div>
    );
};

ListedBeer.propTypes = {
    beerData: PropTypes.object.isRequired,
    setBeer: PropTypes.func,
    drank: PropTypes.bool
};

