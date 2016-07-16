"use strict";

import React, {PropTypes} from "react";
import {BeerViewHead} from "./BeerViewHead";
import {BeerViewSubHeadDetails} from "./BeerViewSubHeadDetails";
import {BeerViewAddButtons} from "./BeerViewAddButtons";
import {BeerDetailsAndStats} from "./BeerViewDetailsAndStats";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SubHeader from "../common/SubHeader";
import * as BeerActions from "../../actions/BeerActions";

//combine into one function that spits out all three:
function checkIfConsumed (beerId, activeUser) {
    for (let i = 0; i < activeUser.sampledBeers.length; i++) {
        if (activeUser.sampledBeers[i].beerId === beerId) {
            return true;
        }
    }
    return false;
}

function checkIfInToDrink (beerId, activeUser) {
    for (let i = 0; i < activeUser.toDrink.length; i++) {
        if (activeUser.toDrink[i].beerId === beerId) {
            return true;
        }
    }
    return false;
}

function returnBeerRating(beerId, activeUser) {
    for (let i = 0; i < activeUser.sampledBeers.length; i++) {
        if (activeUser.sampledBeers[i].beerId === beerId) {
            return activeUser.sampledBeers[i].beerRating;
        }
    }
}

class SingleBeerPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            beerData: ""
        };
        this.updateConsumed = this.updateConsumed.bind(this);
        this.updateToDrink = this.updateToDrink.bind(this);
        this.updateBeerRating = this.updateBeerRating.bind(this);
    }

    componentWillMount() {
        let storedData = localStorage[this.props.beerId];
        if (storedData) {
            this.setState({beerData: JSON.parse(storedData)});
        }
    }

    updateConsumed(consumed) {
        let beerData = this.state.beerData || this.props.beerData;
        let activeUser = this.props.activeUser;
        if (consumed) {
            this.props.BeerActions.changeIfConsumed(true, beerData, activeUser);
        } else {
            this.props.BeerActions.changeIfConsumed(false, beerData, activeUser);
        }
    }
    
    updateBeerRating(event) {
        let beerData = this.state.beerData || this.props.beerData;
        let activeUser = this.props.activeUser;
        let newRating = event.target.value;
        this.props.BeerActions.saveBeerRating(beerData, activeUser, newRating);
    }

    updateToDrink() {
        let beerData = this.state.beerData || this.props.beerData;
        let activeUser = this.props.activeUser;
        this.props.BeerActions.addToDrink(beerData, activeUser);
    }

    render(){
        console.log("This active user: ", this.props.activeUser);
        console.log("Beer data on page: ", this.props.beerData);
        console.log("Current state: ", this.state);
        let consumed;
        let inToDrink;
        let personalRating;
        let beerData = this.state.beerData || this.props.beerData;
        let activeUser = this.props.activeUser || null;
        if (activeUser) {
            consumed = checkIfConsumed(beerData.id, activeUser);
            inToDrink = checkIfInToDrink(beerData.id, activeUser);
            personalRating = returnBeerRating(beerData.id, activeUser);
        }
                return (
            <div>
                <SubHeader/>
                <h1>Beer View</h1>
                <BeerViewHead consumed={consumed}
                              personalRating={personalRating}
                              updateBeerRating={this.updateBeerRating}
                              beerData={beerData} 
                              activeUser={activeUser}/>
                <BeerViewSubHeadDetails beerData={beerData}/>
                <BeerViewAddButtons consumed={consumed} 
                                    updateConsumed={this.updateConsumed}  
                                    updateToDrink={this.updateToDrink}
                                    inToDrink={inToDrink}
                                    activeUser={activeUser}/>
                <BeerDetailsAndStats beerData={beerData}/>

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
