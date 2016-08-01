"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActions from "../../actions/UserActions";
import * as BreweryActions from "../../actions/BreweryActions";
import {FindNearbyButton} from "./FindNearbyButton";
import {NearbyResultsHeader} from "./NearbyResults";
import {BreweriesNearbyHeaderAndNav} from "./BreweriesNearbyHeaderAndNav";
import toastr from "toastr";


class BreweriesNearbyPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search: null,
            searchLocation: ""
        };
        
        this.lookupNearbyBreweries = this.lookupNearbyBreweries.bind(this);
        this.confirmLocationPopup = this.confirmLocationPopup.bind(this);
        this.updateSearchLocationState = this.updateSearchLocationState.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
    }
    
    lookupNearbyBreweries(){
        toastr.error("Searches by Geolocation are temporarily nonfunctional. Please do a custom search.");
        if(this.props.coordinates) {
            this.props.BreweryActions.fetchNearbyBreweryData(this.props.coordinates);
        }
    }

    toggleSearch() {
        this.setState({search: true});
    }

    updateSearchLocationState(event) {
        let searchValue = event.target.value;
        return this.setState({searchLocation: searchValue});
    }

    submitSearch(event) {
        event.preventDefault();
        this.props.BreweryActions.customBrewerySearch(this.state.searchLocation);
    }

    confirmLocationPopup(){
        return this.props.UserActions.updateCurrentUserLocation();
    }

    render() {
        //have button in the middle of the page that gets nearby
        //or an input to search location
        this.confirmLocationPopup();
        let initialFindNearby;
        let breweryResults;
        if(this.props.breweries) breweryResults = <NearbyResultsHeader breweries={this.props.breweries}/>;
        return (
            <div>
                <BreweriesNearbyHeaderAndNav
                    toggleSearch={this.toggleSearch}
                    search={this.state.search}
                    updateSearchState={this.updateSearchLocationState}
                    submitSearch={this.submitSearch}
                    findNearby={this.lookupNearbyBreweries}
                    activeUser={this.props.activeUser}/>
                {breweryResults}
            </div>
        );
    }
}

BreweriesNearbyPage.propTypes = {
    BreweryActions: PropTypes.object.isRequired,
    UserActions: PropTypes.object.isRequired,
    coordinates: PropTypes.object,
    breweries: PropTypes.array,
    activeUser: PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return {
        BreweryActions: bindActionCreators(BreweryActions, dispatch),
        UserActions: bindActionCreators(UserActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    let coordinates, activeUser;
    if(state.userAndAuth && state.userAndAuth.longitude) {
        coordinates = {
            longitude: state.userAndAuth.longitude,
            latitude: state.userAndAuth.latitude
        };
    } else {
        coordinates = null;
    }
    if (state.userAndAuth && state.userAndAuth.email) {
        activeUser = state.userAndAuth;
    }
    return {
        coordinates: coordinates,
        breweries: state.breweryResults,
        activeUser
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesNearbyPage);
