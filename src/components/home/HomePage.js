"use strict";

import React, {PropTypes} from "react";
import DrinkDrankDrunkSection from "./DrinkDrankDrunkSection";
import FindBrewerySection from "./FindBrewerySection";
import DescriptionSection from "./DescriptionSection";
import LoginWithGoogleSection from "./LoginWithGoogleSection";
import * as Auth0Actions from "../../actions/Auth0Actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }


    login () {
        this.props.Auth0Actions.login();
    }

    render() {
        return (
            <div>
                <DrinkDrankDrunkSection
                    activeUser={this.props.activeUserData}/>
                <DescriptionSection/>
                <FindBrewerySection/>
                <LoginWithGoogleSection/>
            </div>
        );
    }
}

HomePage.propTypes = {
    Auth0Actions: PropTypes.object.isRequired,
    activeUser: PropTypes.bool,
    activeUserData: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    let activeUser;
    let activeUserData;
    if (state.userAndAuth && state.userAndAuth.email) {
        activeUser = true;
        activeUserData = state.userAndAuth;
    }
    return {
        activeUser,
        activeUserData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        Auth0Actions: bindActionCreators(Auth0Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
