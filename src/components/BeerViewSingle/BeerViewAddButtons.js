"use strict";

import React, {Prototype} from "react";
import {connect} from "react-redux";


class BeerViewAddButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <a type="button" className="btn btn-raised btn-primary">Register to Rate and Save Beers</a>
                    <div>
                        <button type="button" className="btn btn-raised">Add to your To-Drink List</button>
                    </div>
                    <button type="button" className="btn btn-raised btn-primary">I've had this beer</button>
                    <button type="button" className="btn btn-raised btn-primary">Actually, I've never had this beer.</button>
                </div>
            </div>

        );
    }
}

BeerViewAddButtons.propTypes = {
    // beerData: Prototype.object.isRequired
};

function mapStateToProps(state, ownProps) {

    return {
        beerData: ownProps
    };
}

export default connect(mapStateToProps)(BeerViewAddButtons);




