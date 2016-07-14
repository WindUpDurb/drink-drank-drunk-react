"use strict";

import React, {PropTypes} from "react";

export const BeerViewSubHeadDetails = ({beerData}) => {
    let beerImage = beerData.labels.large || beerData.labels.medium || "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
    return (
        <div className="container">
            <h1 className="text-center">{beerData.name}</h1>
            <h3 className="text-center">Brewed By: {beerData.breweries[0].name || "Brewery name is unavailable."}</h3>
            <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <div id="beerImageWell" className="well center-block">
                        <img src={beerImage}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

BeerViewSubHeadDetails.propTypes = {
   beerData: PropTypes.object.isRequired
};





