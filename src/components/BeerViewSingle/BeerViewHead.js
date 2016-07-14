"use strict";

import React, {PropTypes} from "react";

export const BeerViewHead = ({activeUser}) => {

    if (activeUser) {
        return (
            <div className="container">
                <div className="row">
                    <button className="btn btn-default btn-fab"><img src="/statics/beerRating.png"/></button>
                </div>
                <span className="pull-right"><img src="/statics/updatePending64.png"/></span>
                <span className="pull-right"><img src="/statics/thumbUp64.png"/></span>
                <span className="pull-right"><img src="/statics/beerIconConsumed64.png"/></span>
                <span className="pull-right"><img src="/statics/beerIconNoConsumed64.png" /></span>
                <div className="row">
                    <div className="form-group">
                        <div className="col-sm-1">
                            <label className="control-label">Rate this beer:</label>
                            <select className="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row"></div>
            <span className="pull-right"><img src="/statics/updatePending64.png"/></span>
            <span className="pull-right"><img src="/statics/thumbUp64.png"/></span>
            <div className="row">
            </div>
        </div>
    );

};

BeerViewHead.propTypes = {
    activeUser: PropTypes.object
};



