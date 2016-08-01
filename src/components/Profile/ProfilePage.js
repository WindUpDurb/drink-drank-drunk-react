"use strict";

import React, {PropTypes} from "react";
import * as UserActions from "../../actions/UserActions";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ProfileHeaderAndNav} from "./ProfileHeaderAndNav";
import {BeerLogPageDrank} from "./BeerLogPageDrank";
import {BeerLogPageToDrink} from "./BeerLogPageToDrink";
import {BeerLogAll} from "./BeerLogAll";
import {BeerLogPageChoose} from "./BeerLogPageChoose";

class BeerLogPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            beerLogPage: ""
        };

        this.leafThroughPages = this.leafThroughPages.bind(this);
    }

    componentWillMount() {
        if(!this.props.activeUser) {
            browserHistory.push("/");
        }
    }

    leafThroughPages(event) {
        this.setState({beerLogPage: event.target.name});
        console.log("name: ", event.target.name);
        console.log("state: ", this.state.beerLogPage);
    }


    render(){
        let currentProfileMenu;
        switch(this.state.beerLogPage) {
            case "BeerLog":
                currentProfileMenu = <BeerLogAll beerAndUserData={this.props.userBeerData}/>;
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
    activeUser: PropTypes.object,
    userBeerData: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        activeUser: state.userAndAuth,
        userBeerData: state.userAndAuth.userBeerData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)  
    };  
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerLogPage);