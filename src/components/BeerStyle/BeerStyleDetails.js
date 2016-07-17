"use strict";

import React, {PropTypes} from "react";

const BeerStyleDescription = ({beerStyle}) => {
    console.log("Beer style: ", beerStyle);
    if (beerStyle.styleDescription) {
        return (
            <div className="container-fluid">
                <div className="row beerTapRow">
                    <div className="col-sm-3 col-sm-offset-2">
                        <img src="/statics/beer-tap.png" className="img-responsive"/>
                    </div>
                </div>
                <div className="row currentStyleRow">
                    <div className="col-sm-3 col-sm-offset-2">
                        <h2 className="greyText">{beerStyle.styleDescription.name}</h2>
                    </div>
                    <div className="col-sm-3 col-sm-offset-1">
                        <h2 className="greyText">Characteristics</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 col-sm-offset-3">
                        <p className="styleDescriptionText">{beerStyle.styleDescription.description}</p>
                    </div>
                    <div className="col-sm-3 col-sm-offset-2">
                        <p className="styleDescriptionText">ABV: <span className="styleStats">{beerStyle.styleDescription.abvMin}% - {beerStyle.styleDescription.abvMax}%</span></p>
                        <p className="styleDescriptionText">SRM: <span className="styleStats">{beerStyle.styleDescription.srmMin} - {beerStyle.styleDescription.srmMax}</span></p>
                        <p className="styleDescriptionText">IBU: <span className="styleStats">{beerStyle.styleDescription.ibuMin} - {beerStyle.styleDescription.ibuMax}</span></p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }

};

BeerStyleDescription.propTypes = {
    beerStyle: PropTypes.object
};

export default BeerStyleDescription;