"use strict";

import React, {PropTypes} from "react";
import DrinkDrankDrunkSection from "./DrinkDrankDrunkSection";
import DescriptionSection from "./DescriptionSection";
import * as Auth0Actions from "../../actions/Auth0Actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import $ from "jquery";

function animateBeer() {
    $(document).ready(function() {
        $('.pour')
            .delay(2000)
            .animate({
                height: '360px'
            }, 1500)
            .delay(1600)
            .slideUp(500);

        $('#liquid')
            .delay(3400)
            .animate({
                height: '170px'
            }, 2500);

        $('.beer-foam')
            .delay(3400)
            .animate({
                bottom: '200px'
            }, 2500);
    });
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    componentDidMount(){
        animateBeer();
    }

    login () {
        this.props.Auth0Actions.login();
    }

    render() {
        return (
            <div>
                <DrinkDrankDrunkSection/>
                <DescriptionSection login={this.login}/>
            </div>
        );
    }
}

HomePage.propTypes = {
    Auth0Actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        Auth0Actions: bindActionCreators(Auth0Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
