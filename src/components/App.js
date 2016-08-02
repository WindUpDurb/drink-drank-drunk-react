"use strict";
import React, { PropTypes } from "react";
import FooterSection from "./common/FooterSection";
import ScrollToTop from "react-scroll-up";
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
        let loadingSpinner;
        if (this.props.loading) {
            loadingSpinner = <div className="loader"></div>;
        }
        return (
            <div>
                <ScrollToTop showUnder={160}>
                    <img src="/statics/scrollUp.png"/>
                </ScrollToTop>
                {loadingSpinner}
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
    loading: PropTypes.number,
    UserActions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.requestsInProgress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
