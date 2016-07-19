"use strict";

import React, {PropTypes} from "react";
import * as UserActions from "../../actions/UserActions";
import * as BeerActions from "../../actions/BeerActions";
import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {NavbarPresentation} from "./NavbarPresentation";
//import LoadingDots from "./LoadingDots";


class NavbarContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchQuery: ""
        };

        this.sendLogout = this.sendLogout.bind(this);
        this.updateSearchFieldState = this.updateSearchFieldState.bind(this);
        this.beerSearch = this.beerSearch.bind(this);
    }

    beerSearch(event) {
        event.preventDefault();
        this.setState({searchQuery: ""});
        let query = this.state.searchQuery;
        this.props.BeerActions.fetchBeerSearchResults(query)
            .then(response => {
                if (response.success) {
                    browserHistory.push("/beerSearch");
                }
            });
    }

    updateSearchFieldState(event) {
        let query = event.target.value;
        return this.setState({searchQuery: query});
    }

    sendLogout() {
        this.props.UserActions.dispatchLogout()
            .then(response => {
                
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    }
    
    render() {
        return (
            <NavbarPresentation
                sendLogout={this.sendLogout}
                activeUser={this.props.activeUser}
                updateSearchFieldState={this.updateSearchFieldState}
                beerSearch={this.beerSearch}/>
    );
    }
}

NavbarContainer.propTypes = {
    UserActions: PropTypes.object.isRequired,
    BeerActions: PropTypes.object.isRequired,
    activeUser: PropTypes.object
};


function mapStateToProps(state, ownProps) {
    return {
        activeUser: state.userAndAuth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch),
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);