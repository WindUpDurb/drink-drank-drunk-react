"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import BeerStyleDetails from "./BeerStyleDetails";
import ListedBeer from "../common/ListedBeer";

class BeerStylePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("This here, this here: ", this.props)
        return (
            <div>
                <h1>The styles be hurr</h1>
                <BeerStyleDetails beerStyle={this.props.currentStyle}/>
                {
                    this.props.currentStyle.styleContents.map((beer, index) =>
                        <ListedBeer index={index} beerDetails={beer}/>
                    )
                }

            </div>
        );
    }
}

BeerStylePage.propTypes = {
    //currentStyle: PropTypes.object.isRequired
    currentStyle: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

    return {
        currentStyle: state.beerDirectories.currentBeerStyle
    };
}


export default connect(mapStateToProps)(BeerStylePage);
