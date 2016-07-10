"use strict";

import React, {PropTypes} from "react";
import BeerStyleCategory from "./BeerStyleCategory";

const BeerStyleCategoryRow = ({categories}) => {
    console.log("Categoreis: ", categories)
    return (
        <div className="row">
            {categories.map(category =>
                <BeerStyleCategory key={category[0].categoryId} beerCategory={category}/>
            )}
        </div>
    );
};

BeerStyleCategoryRow.propTypes = {
    categories: PropTypes.array.isRequired
};

export default BeerStyleCategoryRow;