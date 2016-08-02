"use strict";

import React, {PropTypes} from "react";
import {BeerTaxonomyModal} from "../common/BeerTaxonomyModal";

const BeerStyleDescription = ({pageNumber, beerStyle}) => {
    if (beerStyle) {
        return (
            <div>
                <div style={{paddingTop: "15px"}} className="row">
                    <span className="blueFontColor styleDescriptionHeadText">Style Description</span>
                </div>
                <div className="blueSectionDivider"></div>
                <div className="row">
                    <div className="col-sm-11 fivepxmarginTB">
                        <span className="styleDescriptionBodyText">{beerStyle.description}</span>
                    </div>
                </div>
                <div className="row styleSectionDiv">
                    <div className="col-sm-5">
                        <img className="img-responsive img-thumbnail" src="/statics/breweryImage.jpg"/>
                    </div>
                    <div className="col-sm-6 col-sm-offset-1">
                        <span className="blueFontColor styleDescriptionHeadText">This style brewed with these statistics</span>
                        <div className="blueSectionDivider">
                            <table className="table table-hover">
                                <tbody>
                                <tr>
                                    <td/>
                                    <td>Minimum</td>
                                    <td>Maximum</td>
                                </tr>
                                <tr>
                                    <td>ABV:</td>
                                    <td>{beerStyle.abvMin || "N/A"}</td>
                                    <td>{beerStyle.abvMax || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td>FG:</td>
                                    <td>{beerStyle.fgMin || "N/A"}</td>
                                    <td>{beerStyle.fgMax || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td>IBU:</td>
                                    <td>{beerStyle.ibuMin || "N/A"}</td>
                                    <td>{beerStyle.ibuMax || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td>SRM:</td>
                                    <td>{beerStyle.srmMin || "N/A"}</td>
                                    <td>{beerStyle.srmMax || "N/A"}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="row styleSectionDiv">
                    <div className="col-sm-6">
                        <span className="blueFontColor styleDescriptionHeadText">For your beer studies</span>
                        <div className="blueSectionDivider"></div>
                        <div className="text-center">
                            <span style={{fontSize: "1.2em"}}>Acquaint yourself with this style some more.</span>
                            <BeerTaxonomyModal />
                        </div>
                    </div>
                    <div className="col-sm-5 col-sm-offset-1">
                        <img className="img-responsive img-thumbnail" src="/statics/breweryImage2.jpg"/>
                    </div>
                </div>

                <div className="row styleSectionDiv">
                    <div className="col-sm-10">
                        <span className="blueFontColor styleDescriptionHeadText">Page {pageNumber} of {beerStyle.name} beers</span>
                        <div className="blueSectionDivider"></div>
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
    beerStyle: PropTypes.object,
    pageNumber: PropTypes.string
};

export default BeerStyleDescription;