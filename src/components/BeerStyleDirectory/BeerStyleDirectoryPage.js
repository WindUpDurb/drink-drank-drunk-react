"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";

class BeerStyleDirectoryPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>Beer Directory</h1>
            </div>
        )
    }

}

export default BeerStyleDirectoryPage;
