"use strict";

import React from "react";

export const BeerRatingIcon = () => {
    let style = {
        backgroundColor: "#272100",
        boxShadow: " 10px 10px 5px #888888",
        marginLeft: "3px",
        marginRight: "3px"
    };
    return (
        <button style={style} className="btn btn-default btn-fab"><img src="/statics/beerRating.png"/></button>
    );
};



