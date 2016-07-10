"use strict";

import React, {PropTypes} from "react";
import {Link} from "react-router";

const BeerStyle = ({beerStyle}) => {
    return (
        <li><Link to={`style/${beerStyle.name}`}>{beerStyle.name}</Link></li>
    );
};

BeerStyle.propTypes = {
    beerStyle: PropTypes.object.isRequired
};

export default BeerStyle;