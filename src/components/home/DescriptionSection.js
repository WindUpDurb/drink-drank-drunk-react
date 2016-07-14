"use strict";

import React from "react";

const DescriptionSection = () => {

    return (
        <div className="container-fluid">
            <div className="container">
                <p className="descriptive-text site-text">
                    <br/>Catalog the beers you've met
                        <br/>Rate the beers you've conquered
                            <br/>Record the beers you aim to consume</p>
            </div>
            <div className="row">
                <div className="col-sm-4 col-sm-offset-3 hidden-xs">
                    <img className="raise-beerimage" src="statics/beerRaised.png"/>
                </div>
            </div>
            <div className="text-center">
                <a className="btn btn-raised default">Register Here</a>
            </div>
        </div>
    );
};

export default DescriptionSection;