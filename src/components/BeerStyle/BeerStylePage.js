"use strict";

import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";

class BeerStylePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>The styles be hurr</h1>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {

}

export default connect(mapStateToProps)(BeerStylePage);
