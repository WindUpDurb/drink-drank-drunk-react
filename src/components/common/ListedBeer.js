"use strict";

import React, {PropTypes} from "react";

export const ListedBeer = ({drank, inProfile, setBeer, beerData}) => {
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
    if (inProfile && drank) {
        drankIcon = <img data-toggle="tooltip" data-placement="bottom" title="Beer Drank"  src="/statics/beerIconConsumed32.png"/>;
    } else if (inProfile && !drank) {
        drankIcon = <img data-toggle="tooltip" data-placement="bottom" title="Yet to Drink" src="/statics/beerIconNoConsumed32.png"/>;
    }
    return (
        <div className="col-md-5 col-md-offset-1 col-lg-4 col-lg-offset-1 cardEffect text-center beerCard">
            <div className="beerCardImageDiv">
                <img className="beerCardImage" onClick={setAndTransition} src={beerData.beerImage || beerImage}/>
            </div>
            <br/>
            <span onClick={setAndTransition} className="beerCardBeerName">{beerData.name || beerData.beerName}</span>
            <br/>
            <span className="beerCardBreweryName">{breweryName || beerData.breweryName || "Brewery data is unavailable."}</span>
            <div className="beerCardIconRow row">
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
    drank: PropTypes.bool,
    inProfile: PropTypes.bool
};

