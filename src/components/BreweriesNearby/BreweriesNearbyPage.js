"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as BreweryActions from "../../actions/BreweryActions";
import SubHeader from "../common/SubHeader";

class BreweriesNearbyPage extends React.Component {
    constructor(props) {
        super(props);
        this.lookupNearbyBreweries = this.lookupNearbyBreweries.bind(this);
    }
    
    lookupNearbyBreweries(){
        this.props.BreweryActions.fetchNearbyBreweryData(this.props.coordinates);
    }

    render() {
        //have button in the middle of the page that gets nearby
        //or an input to search location
        return (
            <div>
                <SubHeader/>
                <button onClick={this.lookupNearbyBreweries}>Find Nearby Breweries</button>
            </div>
        );
    }
}

BreweriesNearbyPage.propTypes = {
    BreweryActions: PropTypes.object.isRequired,
    coordinates: PropTypes.object
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
        coordinates: coordinates
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesNearbyPage);
