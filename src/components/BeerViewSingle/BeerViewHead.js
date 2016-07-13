"use strict";

import React, {Prototype} from "react";
import {connect} from "react-redux";


class BeerViewHead extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let beerData = this.props.beerData;
        console.log("Beer data: ", beerData);
        return (
            <div className="container">
                <div className="row">
                    <button className="btn btn-default btn-fab"><img src="/images/beerRating.png"/></button>
                </div>
                <span className="pull-right"><img src="/images/updatePending64.png"/></span>
                <span className="pull-right"><img src="/images/thumbUp64.png"/></span>
                <span className="pull-right"><img src="/images/beerIconConsumed64.png"/></span>
                <span className="pull-right"><img src="/images/beerIconNoConsumed64.png" /></span>
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
}

BeerViewHead.propTypes = {
    //beerData: Prototype.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        beerData: ownProps
    };
}

export default connect(mapStateToProps)(BeerViewHead);




