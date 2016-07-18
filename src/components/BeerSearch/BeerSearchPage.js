"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import SubHeader from "../common/SubHeader";
import ListedBeer from "../common/ListedBeer";
import {BeerSearchHeader} from "./BeerSearchHeader";

class BeerSearchPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (!this.props.searchResults) {
            browserHistory.push("/");
        }
    }
    
    render() {
        let searchResults = this.props.searchResults.map((beer, index) => <ListedBeer key={index} beerDetails={beer}/>)
        return (
            <div>
                <SubHeader/>
                <BeerSearchHeader query={this.props.query}/>
                {searchResults}
            </div>
        );
    }
}

BeerSearchPage.propTypes = {
    query: PropTypes.string,
    searchResults: PropTypes.array
};


function mapStateToProps(state, ownProps) {
    let query, searchResults;
    if (state.beerSearch) {
        query = state.beerSearch.query;
        searchResults = state.beerSearch.searchResults;
    }
    return {
        query: query,
        searchResults: searchResults
    };
}


export default connect(mapStateToProps)(BeerSearchPage);