"use strict";

import React, {PropTypes} from "react";
import BeerStyleCategory from "./BeerStyleCategory";

const BeerStyleCategoryRow = ({categories}) => {
    return (
        <div className="row">
            <div className="col-sm-2"></div>
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