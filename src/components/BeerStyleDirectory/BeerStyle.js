"use strict";

import React, {PropTypes} from "react";
import {Link} from "react-router";

const BeerStyle = ({beerStyle}) => {
    return (
        <li>{beerStyle.name}</li>
    );
};

BeerStyle.propTypes = {
    beerStyle: PropTypes.object.isRequired
};

export default BeerStyle;