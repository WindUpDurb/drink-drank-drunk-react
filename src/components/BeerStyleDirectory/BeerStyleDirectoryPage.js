"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";

class BeerStyleDirectoryPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Props: ", this.props);
        return (
            <div>
                <h1>Beer Directory</h1>
            </div>
        );
    }

}

function mapStateToProps(state, ownProps) {
    //defining an object that returns the properties we want exposed on our component
    return {
        beerStyles: state.beerDirectories
    };
}

export default connect(mapStateToProps)(BeerStyleDirectoryPage);
