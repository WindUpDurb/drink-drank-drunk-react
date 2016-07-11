"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import * as beerActions from "../../actions/BeerActions";


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

BeerStylePage.propTypes = {
    //currentStyle: PropTypes.object.isRequired
    ownProps: PropTypes.object
};

function mapStateToProps(state, ownProps) {

    return {
        ownProps: ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // getStyleContents: style => dispatch(beerActions.fetchStyleContents(style))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerStylePage);
