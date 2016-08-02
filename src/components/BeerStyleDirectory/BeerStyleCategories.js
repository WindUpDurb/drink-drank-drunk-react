"use strict";

import React, {PropTypes} from "react";
import {BeerCategory} from "./BeerCategory";
import * as FunctionTools from "../../actions/FunctionTools";

export const BeerStyleCategories = ({toggleCategories, beerCategories}) => {
    const beerCategoriesElements = (
        FunctionTools.arrayOfValues(beerCategories)
            .map((category, index) => <BeerCategory toggleCategories={toggleCategories} beerCategory={category} key={index}/>)
    );
    return (
        <div>
            <span id="directoryMenuHeadingText">Let's begin to narrow down our choices.</span>
            {beerCategoriesElements}
        </div>
    );
};

BeerStyleCategories.propTypes = {
    beerCategories: PropTypes.object,
    toggleCategories: PropTypes.func.isRequired
};
