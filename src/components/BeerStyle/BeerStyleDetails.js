"use strict";

import React, {PropTypes} from "react";

const BeerStyleDescription = (beerStyle) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3 col-sm-offset-2">
                    <img src="/images/beer-tap.png" className="img-responsive"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 col-sm-offset-2">
                    <h2 className="greyText">{beerStyle.beerStyle.styleDescription.name}</h2>
                </div>
                <div className="col-sm-3 col-sm-offset-1">
                    <h2 className="greyText">Characteristics</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 col-sm-offset-3">
                    <p className="styleDescriptionText">{beerStyle.beerStyle.styleDescription.description}</p>
                </div>
                <div className="col-sm-3 col-sm-offset-2">
                    <p className="styleDescriptionText">ABV: <span>{beerStyle.beerStyle.styleDescription.abvMin}% - {beerStyle.beerStyle.styleDescription.abvMax}%</span></p>
                    <p className="styleDescriptionText">SRM: <span>{beerStyle.beerStyle.styleDescription.srmMin} - {beerStyle.beerStyle.styleDescription.srmMax}</span></p>
                    <p className="styleDescriptionText">IBU: <span>{beerStyle.beerStyle.styleDescription.ibuMin} - {beerStyle.beerStyle.styleDescription.ibuMax}</span></p>
                </div>
            </div>
        </div>
    );

};

BeerStyleDescription.propTypes = {
    beerStyle: PropTypes.object.isRequired
};

export default BeerStyleDescription;