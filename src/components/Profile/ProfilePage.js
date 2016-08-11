"use strict";

import React, {PropTypes} from "react";
import * as UserActions from "../../actions/UserActions";
import * as BeerActions from "../../actions/BeerActions";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ProfileHeaderAndNav} from "./ProfileHeaderAndNav";
import {BeerLogAll} from "./BeerLogAll";
import toastr from "toastr";
import * as FunctionTools from "../../actions/FunctionTools";

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            profilePage: "",
            onlyToDrinks: false,
            onlyDranks: false,
            filteredBeers: null,
            filterSearchParams: null
        };

        this.leafThroughPages = this.leafThroughPages.bind(this);
        this.fetchBeerDataAndSet = this.fetchBeerDataAndSet.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.filterThroughBeers = this.filterThroughBeers.bind(this);
    }

    componentWillMount() {
        if(!this.props.activeUser) {
            browserHistory.push("/");
        }
    }

    leafThroughPages(event) {
        this.setState({profilePage: event.target.name});
    }
    
    fetchBeerDataAndSet(beer) {
        let beerData = Object.assign({}, beer);
        this.props.BeerActions.fetchBeerData(beerData.beerId);
    }

    toggleCheckbox(toUpdate) {
        console.log("Check: ", this.state.filterSearchParams)
        let copyOfBeers = [...this.props.userBeerData];
        let onlyToDrinks = this.state.onlyToDrinks;
        let onlyDranks = this.state.onlyDranks;
        if (toUpdate === "toDrinks") onlyToDrinks = !onlyToDrinks;
        if (toUpdate === "dranks") onlyDranks = !onlyDranks;
        let filteredBeers = FunctionTools.filterBeers(
            this.state.filterSearchParams, onlyToDrinks, onlyDranks, copyOfBeers);
        this.setState({
            onlyToDrinks,
            onlyDranks,
            filteredBeers
        });
    }
    
    filterThroughBeers(event) {
        let copyOfBeers = [...this.props.userBeerData];
        let searchParams = event.target.value;
        let filteredBeers = FunctionTools.filterBeers(
            searchParams, this.state.onlyToDrinks,
            this.state.onlyDranks, copyOfBeers);
        this.setState({filterSearchParams: searchParams, filteredBeers});
    }

    render(){
        let currentProfileMenu;
        switch(this.state.profilePage) {
            case "BeerLog":
                if (!this.props.userBeerData) {
                    toastr.info("You have neither drank beers nor beers in your To-Drink list to display. \n Find some beers and add them.");
                } else {
                    currentProfileMenu = (
                        <BeerLogAll setBeer={this.fetchBeerDataAndSet} beerData={this.state.filteredBeers ||this.props.userBeerData}
                            onlyToDrinks={this.state.onlyToDrinks} onlyDranks={this.state.onlyDranks}
                                    filterThroughBeers={this.filterThroughBeers} toggleCheckbox={this.toggleCheckbox}/>
                    );
                }
                break;
            default:
                currentProfileMenu = null;
        }

        return (
            <div>
                <ProfileHeaderAndNav
                    leafThrough={this.leafThroughPages}
                    activeUser={this.props.activeUser}/>
                <div id="beerDirectoryBody">
                    <div className="container">
                        <div className="row">
                            {currentProfileMenu}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProfilePage.propTypes = {
    UserActions: PropTypes.object.isRequired,
    BeerActions: PropTypes.object.isRequired,
    activeUser: PropTypes.object,
    userBeerData: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    let activeUserCopy = Object.assign({}, state.userAndAuth);
    let userBeerData = FunctionTools.extractAllBeers(activeUserCopy.userBeerData);
    return {
        activeUser: activeUserCopy,
        userBeerData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch),
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);