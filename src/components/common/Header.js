"use strict";

import React, {PropTypes} from "react";
import { Link, IndexLink } from "react-router";
import * as UserActions from "../../actions/UserActions";
import {bindActionCreators} from "redux";
import {browserHistory, connect} from "react-redux";

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
            <div className="navbar navbar-default" id="navbar-container">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand"/>
                    </div>
                    <div className="navbar-collapse collapse navbar-responsive-collapse">
                        <ul className="nav navbar-nav">
                            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                            <li><Link to="/beerStyles" activeClassName="active">Browse Beers</Link></li>
                            <li><Link to="/beerLog" activeClassName="active">Beer Log</Link></li>
                            <li><Link to="/beerLog" activeClassName="active">Beer Log</Link></li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                                <input type="text" className="form-control col-sm-8" placeholder="Search"/>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/register" activeClassName="active">Register</Link></li>
                            <li className="dropdown">
                                <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                                    <b className="caret"/></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/login" activeClassName="active">Login</Link></li>
                                    <li><Link to="/account" activeClassName="active">Account</Link></li>
                                    <li className="divider"/>
                                    <li onClick={this.sendLogout}><Link to="" activeClassName="active">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    );
    }
}

Header.propTypes = {
    UserActions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);