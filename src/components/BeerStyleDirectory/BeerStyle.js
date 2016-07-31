"use strict";

import React, {PropTypes} from "react";

export const BeerStyle = ({style}) => {
    return (
        <div className="text-center">
            <span className="beerCategory">{style}</span>
        </div>
    );
};

BeerStyle.propTypes = {
    style: PropTypes.string.isRequired
};
