"use strict";

import React, {PropTypes} from "react";
import * as UserActions from "../../actions/UserActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class BeerLogPage extends React.Component {

    componentWillMount() {
        this.props.UserActions.securitySearch();
    }

    render(){
        return (
            <div>
                <h1>Beer Log</h1>
            </div>
        );
    }
}

BeerLogPage.propTypes = {
    UserActions: PropTypes.object.isRequired  
};

function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)  
    };  
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerLogPage);