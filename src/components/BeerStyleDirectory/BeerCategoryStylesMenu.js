"use strict";

import React, {PropTypes} from "react";
import {BeerStyle} from "./BeerStyle";
import * as FunctionTools from "../../actions/FunctionTools";

export const BeerCategoryStylesMenu = ({grabStyle, toggleCategories, styles}) => {
    let returnToCategories = () => toggleCategories(null);
    let styleMenu = styles.styleNames.map((style, index) => <BeerStyle grabStyle={grabStyle} key={index} styleId={style.styleId} style={style.name}/>);
    return (
        <div className="text-center">
            <div className="row">
                <div className="col-sm-3">
                    <span id="backArrow" onClick={returnToCategories}><img src="/statics/return.png"/></span>
                </div>
            </div>
            <span id="directoryMenuHeadingText">{styles.categoryName}</span>
            <div className="directoryMenuDivider row">
                <div className="col-sm-6 col-sm-offset-3 greyBB"></div>
            </div>
            {styleMenu}
            <div className="row">
                <div className="col-sm-1 col-sm-offset-10">
                    <img src="/statics/beerMenuBottom.png"/>
                </div>
            </div>
        </div>
    );
};

BeerCategoryStylesMenu.propTypes = {
    styles: PropTypes.object.isRequired,
    toggleCategories: PropTypes.func.isRequired,
    grabStyle: PropTypes.func.isRequired
};
