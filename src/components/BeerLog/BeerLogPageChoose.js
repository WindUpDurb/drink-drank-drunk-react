"use strict";

import React, {PropTypes} from "react";

export const BeerLogPageChoose = ({leafThroughPages}) => {


    return (
        <div id="beerLogChoose" className="row">
            <div className="col-sm-2 col-sm-offset-2">
                <div className="form-group">
                    <label>Which page would you like to see?</label>
                    <select onChange={leafThroughPages} id="s1" className="form-control">
                        <option value=""></option>
                        <option value="To-Drink">To-Drink</option>
                        <option value="Drank">Drank</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

BeerLogPageChoose.propTypes = {
    leafThroughPages: PropTypes.func.isRequired
};