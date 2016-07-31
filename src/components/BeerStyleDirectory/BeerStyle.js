"use strict";

import React, {PropTypes} from "react";

export const BeerStyle = ({styleId, grabStyle, style}) => {
    let fetchStyle = () => grabStyle(styleId);
    return (
        <div className="text-center">
            <span
                onClick={fetchStyle}
                className="beerCategory">{style}</span>
        </div>
    );
};

BeerStyle.propTypes = {
    style: PropTypes.string.isRequired,
    styleId: PropTypes.number.isRequired,
    grabStyle: PropTypes.func.isRequired
};
