"use strict";

import React, {PropTypes} from "react";

export const BeerCategory = ({toggleCategories, beerCategory}) => {
    let showStyles = () => toggleCategories(beerCategory);
    return (
        <div className="beerCategoryDiv">
            <span
                onClick={showStyles}
                className="beerCategory">{beerCategory.categoryName}</span>
        </div>
    );
};

BeerCategory.propTypes = {
    beerCategory: PropTypes.object.isRequired,
    toggleCategories: PropTypes.func.isRequired
};
