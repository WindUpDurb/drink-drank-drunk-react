"use strict";

import React, {PropTypes} from "react";

const BeerStyleDescription = ({beerStyle}) => {
    if (beerStyle) {
        return (
            <div className="container-fluid">
                <div className="row beerTapRow">
                    <div className="col-sm-3 col-sm-offset-2">
                        <img src="/statics/beer-tap.png" className="img-responsive"/>
                    </div>
                </div>
                <div className="row currentStyleRow">
                    <div className="col-sm-3 col-sm-offset-2">
                        <h2 className="greyText">{beerStyle.name}</h2>
                    </div>
                    <div className="col-sm-3 col-sm-offset-1">
                        <h2 className="greyText">Characteristics</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-3">
                        <p className="styleDescriptionText">{beerStyle.description}</p>
                    </div>
                    <div className="col-sm-3 col-sm-offset-1">
                        <table className="table table-striped table-hover">
                            <tbody>
                            <tr>
                                <td><span className="styleDescriptionText">ABV:</span></td>
                                <td><span className="styleDescriptionText">{beerStyle.abvMin}% - {beerStyle.abvMax}%</span></td>
                            </tr>
                            <tr>
                                <td><span className="styleDescriptionText">SRM:</span></td>
                                <td><span className="styleDescriptionText">{beerStyle.srmMin} - {beerStyle.srmMax}</span></td>
                            </tr>
                            <tr>
                                <td><span className="styleDescriptionText">IBU:</span></td>
                                <td><span className="styleDescriptionText">{beerStyle.ibuMin} - {beerStyle.ibuMax}</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="styleSubHeading" className="row">
                    <div className="col-sm-8 col-sm-offset-3">
                        <h3 className="greyText">Here are some {beerStyle.name} Beers</h3>
                    </div>
                    <div className="subjectBreak container-fluid"></div>
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