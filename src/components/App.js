"use strict";
//This component handles the App template used on every page.

import React, { PropTypes } from "react";
import Header from "./common/Header";
import FooterSection from "./common/FooterSection";
import $ from "jquery";
import * as material from "../../node_modules/bootstrap-material-design/dist/js/material.min"
//because this is a connected component, need:
import {connect} from "react-redux";


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
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
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);
