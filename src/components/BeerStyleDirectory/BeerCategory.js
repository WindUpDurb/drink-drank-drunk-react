"use strict";

import React, {PropTypes} from "react";

export const BeerCategory = ({beerCategory}) => {
    console.log("In category: ", beerCategory)
    return (
        <div>
            {beerCategory.categoryName}
        </div>
    );
};

BeerCategory.propTypes = {
    beerCategory: PropTypes.object.isRequired
};
