"use strict";

import React, {PropTypes} from "react";

export const BreweryResult = ({brewery}) => {
    console.log("Brewry: ", brewery);
    let breweryPhone = `(${brewery.phone.substr(0, 3)}) ${brewery.phone.substr(3, 3)}-${brewery.phone.substr(6, 4)}`;

    return (
        <div className="col-sm-8">
            <div className="breweryBottomTopBorders container-fluid"></div>
            <div className="row">
                <div className="col-sm-3">
                    <img src={brewery.image_url} className="img-rounded img-responsive"/>
                </div>
                <div className="col-sm-6">
                    <h4><a href={brewery.url} target="_blank">{brewery.name}</a></h4>
                    <img src={brewery.rating_img_url}/><span className="reviewCount">{brewery.review_count} reviews</span>
                </div>
                <div>
                    <div className="col-sm-3">
                        <h5>{brewery.location.display_address[0]}</h5>
                        <h5>{brewery.location.display_address[1]}</h5>
                        <h5>{breweryPhone}</h5>
                    </div>
                </div>
            </div>
            <div className="breweryBottomTopBorders container-fluid"></div>
        </div>
    );
};

BreweryResult.propTypes = {
    brewery: PropTypes.object.isRequired
};
