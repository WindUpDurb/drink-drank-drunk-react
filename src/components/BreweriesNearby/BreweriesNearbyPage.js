"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as BreweryActions from "../../actions/BreweryActions";
import SubHeader from "../common/SubHeader";
import {FindNearbyButton} from "./FindNearbyButton";
import {NearbyResultsHeader} from "./NearbyResults";

class BreweriesNearbyPage extends React.Component {
    constructor(props) {
        super(props);
        this.lookupNearbyBreweries = this.lookupNearbyBreweries.bind(this);
    }
    
    lookupNearbyBreweries(){
        if(this.props.coordinates) {
            this.props.BreweryActions.fetchNearbyBreweryData(this.props.coordinates);
        }
    }

    render() {
        //have button in the middle of the page that gets nearby
        //or an input to search location
        console.log(this.props)
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
    coordinates: PropTypes.object,
    breweries: PropTypes.object
};

function mapDispatchToProps(dispatch) {
    return {
        BreweryActions: bindActionCreators(BreweryActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    let coordinates = {
        longitude: state.userAndAuth.longitude,
        latitude: state.userAndAuth.latitude
    };
    return {
        coordinates: coordinates,
        breweries: state.breweryResults
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesNearbyPage);
