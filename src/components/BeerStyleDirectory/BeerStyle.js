"use strict";

import React, {PropTypes} from "react";
import * as BeerActions from "../../actions/BeerActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";

class BeerStyle extends React.Component {

    constructor(props) {
        super(props);
        this.grabStyleContentsAndSet = this.grabStyleContentsAndSet.bind(this);
    }

    grabStyleContentsAndSet() {
        this.props.actions.fetchStyleContents(this.props.beerStyle, 1)
            .then(response => {
                browserHistory.push(`/beerStyles/${this.props.beerStyle.shortName}`);
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    }


    render() {
        return (
            <li onClick={this.grabStyleContentsAndSet}><a>{this.props.beerStyle.name}</a></li>
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
        state: state,
        beerStyle: ownProps.beerStyle
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerStyle);
