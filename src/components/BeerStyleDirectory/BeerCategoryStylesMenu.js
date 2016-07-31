"use strict";

import React, {PropTypes} from "react";
import {BeerStyle} from "./BeerStyle";
import * as FunctionTools from "../../actions/FunctionTools";

export const BeerCategoryStylesMenu = ({toggleCategories, styles}) => {
    let returnToCategories = () => toggleCategories(null);
    let styleMenu = styles.styleNames.map((style, index) => <BeerStyle key={index} style={style}/>);
    return (
        <div className="text-center">
            <div className="row">
                <div className="col-sm-3">
                    <span id="backArrow" onClick={returnToCategories}><img src="/statics/backArrow.png"/></span>
                </div>
            </div>
            <span id="directoryMenuHeadingText">{styles.categoryName}</span>
            {styleMenu}
        </div>
    );
};

BeerCategoryStylesMenu.propTypes = {
    styles: PropTypes.object.isRequired,
    toggleCategories: PropTypes.func.isRequired
};
