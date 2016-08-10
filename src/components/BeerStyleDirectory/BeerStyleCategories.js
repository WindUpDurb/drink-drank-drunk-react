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
            <span id="directoryMenuHeadingText">Let's start narrowing down our choices.</span>
            <div className="directoryMenuDivider row">
                <div className="col-sm-6 col-sm-offset-3 greyBB"></div>
            </div>
            {beerCategoriesElements}
            <div className="row">
                <div className="col-sm-1 col-sm-offset-10">
                    <img src="/statics/beerMenuBottom.png"/>
                </div>
            </div>
        </div>
    );
};

BeerStyleCategories.propTypes = {
    beerCategories: PropTypes.object,
    toggleCategories: PropTypes.func.isRequired
};
