"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActions from "../../actions/UserActions";
import * as BreweryActions from "../../actions/BreweryActions";
import SubHeader from "../common/SubHeader";
import {FindNearbyButton} from "./FindNearbyButton";
import {NearbyResultsHeader} from "./NearbyResults";

function animateBeer() {
    $(document).ready(function() {
        $('.pour') //Pour Me Another Drink, Bartender!
            .delay(2000)
            .animate({
                height: '360px'
            }, 1500)
            .delay(1600)
            .slideUp(500);

        $('#liquid') // I Said Fill 'Er Up!
            .delay(3400)
            .animate({
                height: '170px'
            }, 2500);

        $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
            .delay(3400)
            .animate({
                bottom: '200px'
            }, 2500);
    });
}

class BreweriesNearbyPage extends React.Component {
    constructor(props) {
        super(props);
        this.lookupNearbyBreweries = this.lookupNearbyBreweries.bind(this);
        this.confirmLocationPopup = this.confirmLocationPopup.bind(this);
    }
    
    lookupNearbyBreweries(){
        if(this.props.coordinates) {
            this.props.BreweryActions.fetchNearbyBreweryData(this.props.coordinates);
        }
    }

    confirmLocationPopup(){
        return this.props.UserActions.updateCurrentUserLocation();
    }

    render() {
        //have button in the middle of the page that gets nearby
        //or an input to search location
        console.log(this.props);
        this.confirmLocationPopup();
        let initialFindNearby;
        let breweryResults;
        if(!this.props.breweries) initialFindNearby = <FindNearbyButton findNearby={this.lookupNearbyBreweries}/>;
        if(this.props.breweries) breweryResults = <NearbyResultsHeader breweries={this.props.breweries}/>;
        return (
            <div>
                <SubHeader/>
                {initialFindNearby}
                {breweryResults}
            </div>
        );
    }
}

BreweriesNearbyPage.propTypes = {
    BreweryActions: PropTypes.object.isRequired,
    UserActions: PropTypes.object.isRequired,
    coordinates: PropTypes.object,
    breweries: PropTypes.array
};

function mapDispatchToProps(dispatch) {
    return {
        BreweryActions: bindActionCreators(BreweryActions, dispatch),
        UserActions: bindActionCreators(UserActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    let coordinates;
    if(state.userAndAuth && state.userAndAuth.longitude) {
        coordinates = {
            longitude: state.userAndAuth.longitude,
            latitude: state.userAndAuth.latitude
        };
    } else {
        coordinates = null;
    }
    return {
        coordinates: coordinates,
        breweries: state.breweryResults
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesNearbyPage);
