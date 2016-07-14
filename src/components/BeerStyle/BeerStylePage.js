"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import BeerStyleDetails from "./BeerStyleDetails";
import ListedBeer from "../common/ListedBeer";
import {bindActionCreators} from "redux";
import * as BeerActions from "../../actions/BeerActions";

class BeerStylePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if(!this.props.currentStyle.styleContents) {
            this.props.BeerActions.fetchStyleContents(this.props.currentStyleParam, 1, true)
                .then(response => {
                    console.log("Response here here : ", response)
                })
                .catch(error => {
                   console.log("Error: ", error);
                });
        }

    }

    render() {
        return (
            <div>
                <h1>The styles be hurr</h1>
                <BeerStyleDetails beerStyle={this.props.currentStyle}/>
                {
                    this.props.currentStyle.styleContents.map((beer, index) =>
                        <ListedBeer key={index} beerDetails={beer}/>
                    )
                }

            </div>
        );
    }
}

BeerStylePage.propTypes = {
    currentStyle: PropTypes.object.isRequired,
    BeerActions: PropTypes.object.isRequired,
    currentStyleParam: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log("Own Props ereere: ", ownProps.routeParams.style);
    return {
        currentStyle: state.beerDirectories.currentBeerStyle,
        currentStyleParam: ownProps.routeParams.style
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(BeerStylePage);
