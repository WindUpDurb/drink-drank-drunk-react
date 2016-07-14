"use strict";

import React, {PropTypes} from "react";
import {BeerViewHead} from "./BeerViewHead";
import {BeerViewSubHeadDetails} from "./BeerViewSubHeadDetails";
import {BeerViewAddButtons} from "./BeerViewAddButtons";
import {BeerDetailsAndStats} from "./BeerViewDetailsAndStats";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as BeerActions from "../../actions/BeerActions";


class SingleBeerPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        if(!this.props.beerData.keys) {
            this.props.BeerActions.fetchBeerData(this.props.beerId);
        }

    }

    render(){
        console.log("This active user: ", this.props.activeUser)
        console.log("Beer data on page: ", this.props.beerData);
        return (
            <div>
                <h1>Beer View</h1>
                <BeerViewHead beerData={this.props.beerData} activeUser={this.props.activeUser}/>
                <BeerViewSubHeadDetails beerData={this.props.beerData}/>
                <BeerViewAddButtons activeUser={this.props.activeUser}/>
                <BeerDetailsAndStats beerData={this.props.beerData}/>

            </div>
        );
    }

}

SingleBeerPage.propTypes = {
    beerData: PropTypes.object.isRequired,
    BeerActions: PropTypes.object.isRequired,
    beerId: PropTypes.string.isRequired,
    activeUser: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    console.log("State: ", state);
    return {
        beerData: state.beerDirectories.currentBeer,
        beerId: ownProps.params.beerId,
        activeUser: state.userAndAuth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBeerPage);
