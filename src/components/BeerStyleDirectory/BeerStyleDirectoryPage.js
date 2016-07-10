"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import BeerCategoryRow from "./BeerStyleCategoryRow";

class BeerStyleDirectoryPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let row1 = [this.props.beerStyles[1], this.props.beerStyles[2], this.props.beerStyles[3]];
        let row2 = [this.props.beerStyles[4], this.props.beerStyles[5], this.props.beerStyles[6]];
        let row3 = [this.props.beerStyles[7], this.props.beerStyles[8], this.props.beerStyles[9]];
        return (
            <div className="container">
                <BeerCategoryRow categories={row1}/>
                <BeerCategoryRow categories={row2}/>
                <BeerCategoryRow categories={row3}/>
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
