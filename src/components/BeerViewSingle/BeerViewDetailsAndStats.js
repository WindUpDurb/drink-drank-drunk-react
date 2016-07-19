"use strict";

import React, {PropTypes} from "react";

export const BeerDetailsAndStats = ({beerData}) => {
    let data = beerData.beerData || beerData;
    let breweryData = data.breweries[0];
    let ibuMin, ibuMax, srmMin, srmMax, fgMin, fgMax, styleName, styleDescription, ogMin;
    if (data.style) {
        ibuMin = data.style.ibuMin;
        ibuMax = data.style.ibuMax;
        srmMin = data.style.srmMin;
        srmMax = data.style.srmMax;
        fgMin = data.style.fgMin;
        fgMax = data.style.fgMax;
        ogMin = data.style.ogMin;
        styleName = data.style.name;
        styleDescription = beerData.style.description;
    }

    return (
        <div className="container text-center">
            <div className="subjectBreak container-fluid"></div>
            <div>
                <div className="text-center">
                    <h3>{data.name}</h3>
                </div>
                <div>
                    <p className="paragarphFormat">{data.description || "No Description is Available"}</p>
                </div>
            </div>
            <div className="subjectBreak container-fluid"></div>
            <div>
                <div className="row">
                    <div className="text-center">
                        <h3>{breweryData.name}</h3>
                        <h4>Established: {breweryData.established}</h4>
                    </div>
                </div>
                <div>
                    <p className="breweryExternalSiteText paragarphFormat">{breweryData.description}</p>
                    <p className="breweryExternalSiteText"><a href={breweryData.website} target="_blank">{breweryData.name}</a></p>
                </div>
            </div>

            <div className="subjectBreak container-fluid"></div>

            <div className="row">
                <div id="beerSpecifics" className="col-sm-5">
                    <h3>Beer Specifics</h3>
                    <table className="table table-striped table-hover">
                        <tbody>
                        <tr>
                            <td>ABV: </td>
                            <td>{beerData.abv || "N/A"}%</td>
                            <td/>
                            <td>ABV stands for Alcohol by Volume, and it refers to the percentage of alcohol in a given volume.</td>
                        </tr>
                        <tr>
                            <td>IBU: </td>
                            <td>Minimum: {ibuMin || "N/A"}</td>
                            <td>Maximum: {ibuMax || "N/A"}</td>
                            <td>IBU stands for International Bitterness Units, and measures the bitterness derived from hops on a scale of 0 to 100. </td>
                        </tr>
                        <tr>
                            <td>SRM: </td>
                            <td>Minimum: {srmMin || "N/A"}</td>
                            <td>Maximum: {srmMax || "N/A"}</td>
                            <td>SRM stands for Standard Reference Method, and it refers to a system that classifies beer by the intensity of its color.</td>
                        </tr>
                        <tr>
                            <td>OG: </td>
                            <td>Minimum: {ogMin || "N/A"}</td>
                            <td/>
                            <td>OG stands for Original Gravity, and it refers to the specific gravity of wort that has not been fermented.</td>
                        </tr>
                        <tr>
                            <td>FG: </td>
                            <td>Minimum: {fgMin || "N/A"}</td>
                            <td>Maximum: {fgMax || "N/A"}</td>
                            <td>FG stands for Final Gravity, and it refers to the specific gravity of the beer after it has fermented.</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-sm-5 col-sm-offset-1">
                    <div className="center-block">
                        <h3 className="center">{styleName || "This data is unavailable."}</h3>
                        <p className="paragarphFormat">
                            {styleDescription || "No Description is Available"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

};

BeerDetailsAndStats.propTypes = {
    beerData: PropTypes.object
};