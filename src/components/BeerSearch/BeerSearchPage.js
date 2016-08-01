"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {BeerSearchHeader} from "./BeerSearchHeader";
import {BeerSearchResults} from "./BeerSearchResultsMenu";
import * as BeerActions from "../../actions/BeerActions";
import {bindActionCreators} from "redux";


class BeerSearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.setBeerAndTransition = this.setBeerAndTransition.bind(this);
    }

    componentWillMount() {
        if (!this.props.searchResults) {
            browserHistory.push("/");
        }
    }

    setBeerAndTransition(beerData) {
        this.props.BeerActions.setCurrentBeerAndTransistion(beerData);
    }
    
    render() {
        return (
            <div>
                <BeerSearchHeader
                    activeUser={this.props.activeUser}
                    query={this.props.query}/>
                <BeerSearchResults 
                    setBeer={this.setBeerAndTransition}
                    searchResults={this.props.searchResults}/>
            </div>
        );
    }
}

BeerSearchPage.propTypes = {
    query: PropTypes.string,
    searchResults: PropTypes.array,
    activeUser: PropTypes.object,
    BeerActions: PropTypes.object
};


function mapStateToProps(state, ownProps) {
    let query, searchResults, activeUser;
    if (state.beerSearch) {
        query = state.beerSearch.query;
        searchResults = Object.assign({}, state.beerSearch.searchResults);
    }
    if (state.userAndAuth && state.userAndAuth.email) {
        activeUser = Object.assign({}, state.userAndAuth);
    }
    return {
        query: query,
        searchResults: searchResults,
        activeUser
    };
}

function mapDispatchToProps (dispatch) {
    return {
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(BeerSearchPage);