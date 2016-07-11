"use strict";

import React, {PropTypes} from "react";
import * as BeerActions from "../../actions/BeerActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class BeerStyle extends React.Component {

    constructor(props) {
        super(props);
        this.grabStyleContentsAndSet = this.grabStyleContentsAndSet.bind(this);
    }

    grabStyleContentsAndSet() {
        console.log("Working");
        this.props.actions.fetchStyleContents(this.props.beerStyle.shortName, 1);
    }


    render() {
        return (
            <li onClick={this.grabStyleContentsAndSet}>{this.props.beerStyle.name}</li>
        );
    }

}

BeerStyle.propTypes = {
    beerStyle: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
          actions: bindActionCreators(BeerActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {
        beerStyle: ownProps.beerStyle
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerStyle);
