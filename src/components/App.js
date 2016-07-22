"use strict";
import React, { PropTypes } from "react";
import NavbarContainer from "./common/NavbarContainer";
import FooterSection from "./common/FooterSection";
import $ from "jquery";
import * as UserActions from "../actions/UserActions";
import {bindActionCreators} from "redux";
import * as material from "../../node_modules/bootstrap-material-design/dist/js/material.min";
import {connect} from "react-redux";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavbarContainer/>
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
