"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import BeerCategoryRow from "./BeerStyleCategoryRow";
import SubHeader from "../common/SubHeader";

class BeerStyleDirectoryPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //let storedData = localStorage[this.props.]
    }

    render() {
        let row1 = [this.props.beerStyles[1], this.props.beerStyles[2], this.props.beerStyles[3]];
        let row2 = [this.props.beerStyles[4], this.props.beerStyles[5], this.props.beerStyles[6]];
        let row3 = [this.props.beerStyles[7], this.props.beerStyles[8], this.props.beerStyles[9]];
        return (
            <div>
                <SubHeader/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-sm-offset-9">
                            <img src="/statics/bar-sign.png" className="img-responsive"/>
                        </div>
                    </div>
                    <BeerCategoryRow categories={row1}/>
                    <BeerCategoryRow categories={row2}/>
                    <BeerCategoryRow categories={row3}/>
                </div>
            </div>
        );
    }

}

BeerCategoryRow.propTypes = {
    beerStyles: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        beerStyles: state.beerDirectories.beerDirectories
    };
}

export default connect(mapStateToProps)(BeerStyleDirectoryPage);
