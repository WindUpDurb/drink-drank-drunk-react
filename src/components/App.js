"use strict";
//This component handles the App template used on every page.

import React, { PropTypes } from "react";
import Header from "./common/HeaderContainer";
import FooterSection from "./common/FooterSection";
import $ from "jquery";
import * as UserActions from "../actions/UserActions";
import {bindActionCreators} from "redux";
import * as material from "../../node_modules/bootstrap-material-design/dist/js/material.min";
//because this is a connected component, need:
import {connect} from "react-redux";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.confirmLocationPopup = this.confirmLocationPopup.bind(this);
    }
    
    confirmLocationPopup(){
       this.props.UserActions.updateCurrentUserLocation();
    }

    render() {
        this.confirmLocationPopup();
        return (
            <div>
                <Header/>
                {this.props.children}
                <FooterSection/>

                <script>
                    $(document).ready(function () {
                    $.material.init()
                     });
                </script>
            </div>
        );
    }
}


//prop type validation; where children is a required proptype
App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    UserActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
