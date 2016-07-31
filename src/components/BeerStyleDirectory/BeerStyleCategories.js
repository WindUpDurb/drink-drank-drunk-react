"use strict";

import React, {PropTypes} from "react";
import {BeerCategory} from "./BeerCategory";
import * as FunctionTools from "../../actions/FunctionTools";

export const BeerStyleCategories = ({beerCategories}) => {
    console.log("Beer categories: ", beerCategories)
    console.log("here: ", FunctionTools.arrayOfValues(beerCategories));
    const beerCategoriesElements = (
        FunctionTools.arrayOfValues(beerCategories)
            .map((category, index) => <BeerCategory beerCategory={category} key={index}/>)
    );
    return (
        <div>
            Let's begin to narrow down our choices.
            {beerCategoriesElements}
        </div>
    );
};

BeerStyleCategories.propTypes = {
    beerCategories: PropTypes.object.isRequired
};
