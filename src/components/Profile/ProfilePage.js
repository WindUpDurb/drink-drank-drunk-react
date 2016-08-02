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

class BeerLogPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            beerLogPage: ""
        };

        this.leafThroughPages = this.leafThroughPages.bind(this);
        this.fetchBeerDataAndSet = this.fetchBeerDataAndSet.bind(this);
    }

    componentWillMount() {
        if(!this.props.activeUser) {
            browserHistory.push("/");
        }
    }

    leafThroughPages(event) {
        this.setState({beerLogPage: event.target.name});
    }
    
    fetchBeerDataAndSet(beer) {
        let beerData = Object.assign({}, beer);
        this.props.BeerActions.fetchBeerData(beerData.beerId);
    }


    render(){
        let currentProfileMenu;
        switch(this.state.beerLogPage) {
            case "BeerLog":
                if (!this.props.userBeerData.sampledBeers.length && !this.props.userBeerData.toDrink.length) {
                    toastr.info("You have neither drank beers nor beers in your To-Drink list to display. \n Find some beers and add them.");
                } else {
                    currentProfileMenu = <BeerLogAll setBeer={this.fetchBeerDataAndSet} beerAndUserData={this.props.userBeerData}/>;
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

BeerLogPage.propTypes = {
    UserActions: PropTypes.object.isRequired,
    BeerActions: PropTypes.object.isRequired,
    activeUser: PropTypes.object,
    userBeerData: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    let activeUserCopy = Object.assign({}, state.userAndAuth);
    let userBeerData = activeUserCopy.userBeerData;

    return {
        activeUser: activeUserCopy,
        userBeerData: userBeerData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch),
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerLogPage);