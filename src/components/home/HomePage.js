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
                <DrinkDrankDrunkSection/>
                <DescriptionSection/>
                <FindBrewerySection />
                <LoginWithGoogleSection />
            </div>
        );
    }
}

HomePage.propTypes = {
    Auth0Actions: PropTypes.object.isRequired,
    activeUser: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    let activeUser;
    if (state.userAndAuth && state.userAndAuth.email) {
        activeUser = true;
    }
    return {
        activeUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        Auth0Actions: bindActionCreators(Auth0Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
