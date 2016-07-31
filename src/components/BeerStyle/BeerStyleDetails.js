"use strict";

import React, {PropTypes} from "react";

const BeerStyleDescription = ({beerStyle}) => {
    if (beerStyle) {
        return (
            <div className="container">
                <div className="row">
                    <span>Style Description</span>
                </div>
                <div className="row">
                    <div className="col-sm-11">
                        {beerStyle.description}
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