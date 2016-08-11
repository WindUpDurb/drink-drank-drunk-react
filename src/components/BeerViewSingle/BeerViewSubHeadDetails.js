"use strict";

import React, {PropTypes} from "react";

export const BeerViewSubHeadDetails = ({beerData}) => {
    let beerImage, beerName, breweryName;
    if (beerData) beerName = beerData.name;
    if (beerData && beerData.breweries) breweryName = beerData.breweries[0].name;
    if (beerData && beerData.labels) beerImage = beerData.labels.large || beerData.labels.medium;
    if (beerData && !beerData.labels) beerImage = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

    return (
        <div className="container">
            <h1 className="text-center">{beerName}</h1>
            <h3 className="text-center">Brewed By: {breweryName || "Brewery name is unavailable."}</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                    <div id="beerImageWell" className="well text-center center-block">
                        <img src={beerImage}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

BeerViewSubHeadDetails.propTypes = {
   beerData: PropTypes.object
};





