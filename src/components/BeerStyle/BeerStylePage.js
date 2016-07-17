"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import BeerStyleDetails from "./BeerStyleDetails";
import ListedBeer from "../common/ListedBeer";
import {bindActionCreators} from "redux";
import * as BeerActions from "../../actions/BeerActions";

function grabDirectoryDetails (currentDirectory, directories) {

}

class BeerStylePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styleContents: ""
        };
    }

    componentWillMount() {
        let storedData = localStorage[this.props.localStorageKey];
        if (storedData) {
            this.setState({styleContents: JSON.parse(storedData)});
        } else {
            this.props.BeerActions.fetchStyleContents(this.props.currentStyleParam, 1);
        }

    }

    render() {
        console.log("This props: " , this.state)
        return (
            <div>
                <h1>The styles be hurr</h1>
                <BeerStyleDetails beerStyle={this.props.currentStyle}/>
                {
                    this.state.styleContents.map((beer, index) =>
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
    currentStyleParam: PropTypes.string.isRequired,
    localStorageKey: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log("Own Props ereere: ", ownProps);
    console.log("Own state ereere: ", state);
    return {
        currentStyle: state.beerDirectories.currentBeerStyle,
        currentStyleParam: ownProps.routeParams.style,
        localStorageKey: `${ownProps.params.style}${ownProps.params.page}`
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(BeerStylePage);
