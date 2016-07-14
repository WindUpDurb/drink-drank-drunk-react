"use strict";

import React, {PropTypes} from "react";
import * as UserActions from "../../actions/UserActions";
import {bindActionCreators} from "redux";
import {browserHistory, connect} from "react-redux";
import {HeaderPresentation} from "./HeaderPresentation";
//import LoadingDots from "./LoadingDots";


class Header extends React.Component {
    constructor(props){
        super(props);
        this.sendLogout = this.sendLogout.bind(this);
    }


    sendLogout() {
        this.props.UserActions.dispatchLogout()
            .then(response => {
                console.log("Respnse: ", response);
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    }
    
    render() {
        return (
            <HeaderPresentation sendLogout={this.sendLogout} activeUser={this.props.activeUser}/>
    );
    }
}

Header.propTypes = {
    UserActions: PropTypes.object.isRequired,
    activeUser: PropTypes.object
};


function mapStateToProps(state, ownProps) {
    return {
        activeUser: state.userAndAuth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);