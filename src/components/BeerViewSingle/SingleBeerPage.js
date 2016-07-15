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
        this.addButtonsMethods = this.addButtonsMethods.bind(this);
        this.state = {
            beerData: ""
        };
    }

    componentWillMount() {
        let storedData = localStorage[this.props.beerId];
        if (storedData) {
            this.setState({beerData: JSON.parse(storedData)});
        }
    }

    addButtonsMethods(action) {
        let beerData = this.state.beerData || this.props.beerData;
        let activeUser = this.props.activeUser;
        this.props.BeerActions.changeBeerStatus(action, beerData, activeUser);
    }

    render(){
        console.log("This active user: ", this.props.activeUser);
        console.log("Beer data on page: ", this.props.beerData);
        console.log("Current state: ", this.state);
                return (
            <div>
                <h1>Beer View</h1>
                <BeerViewHead beerData={this.state.beerData || this.props.beerData} activeUser={this.props.activeUser}/>
                <BeerViewSubHeadDetails beerData={this.state.beerData || this.props.beerData}/>
                <BeerViewAddButtons addButtonMethods={this.addButtonsMethods} activeUser={this.props.activeUser}/>
                <BeerDetailsAndStats beerData={this.state.beerData || this.props.beerData}/>

            </div>
        );
    }

}

SingleBeerPage.propTypes = {
    beerData: PropTypes.object,
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
