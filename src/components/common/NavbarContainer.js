"use strict";

import React, {PropTypes} from "react";
import * as UserActions from "../../actions/UserActions";
import * as BeerActions from "../../actions/BeerActions";
import * as Auth0Actions from "../../actions/Auth0Actions";
import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {NavbarPresentation} from "./NavbarPresentation";
import toastr from "toastr";
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
        this.loginTest = this.loginTest.bind(this);
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
        this.props.UserActions.dispatchLogout();
        toastr.info("You've been successfully logged out.");
    }

    loginTest () {
        console.log("Working");
        this.props.Auth0Actions.login()
    }

    render() {
        return (
            <NavbarPresentation
                login={this.loginTest}
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
    Auth0Actions: PropTypes.object.isRequired,
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
        BeerActions: bindActionCreators(BeerActions, dispatch),
        Auth0Actions: bindActionCreators(Auth0Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);