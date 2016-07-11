"use strict";

import React, {PropTypes} from "react";
import {Link} from "react-router";
import BeerStyle from "./BeerStyle";

const BeerStyleCategory = (beerCategory) => {
    return (
        <div className="col-sm-3">
            <h5>{beerCategory.beerCategory[0].category.name}</h5>
            <br/>
            <ul>
                {
                    beerCategory.beerCategory.map((beerStyle, index) =>
                      <BeerStyle key={beerStyle.name} beerStyle={beerStyle}/>
                    )
                }
            </ul>
        </div>
    );
};

BeerStyleCategory.propTypes = {
    beerCategory: PropTypes.array.isRequired
};

export default BeerStyleCategory;