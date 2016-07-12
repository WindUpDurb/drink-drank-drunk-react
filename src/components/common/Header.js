"use strict";

import React, {PropTypes} from "react";
import { Link, IndexLink } from "react-router";
//import LoadingDots from "./LoadingDots";


export default class Header extends React.Component {

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
                            <li><IndexLink to="/beerLog" activeClassName="active">Beer Log</IndexLink></li>
                            <li><IndexLink to="/beerLog" activeClassName="active">Beer Log</IndexLink></li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                                <input type="text" className="form-control col-sm-8" placeholder="Search"/>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><IndexLink to="/register" activeClassName="active">Register</IndexLink></li>
                            <li className="dropdown">
                                <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                                    <b className="caret"/></a>
                                <ul className="dropdown-menu">
                                    <li><IndexLink to="/login" activeClassName="active">Login</IndexLink></li>
                                    <li><IndexLink to="/account" activeClassName="active">Account</IndexLink></li>
                                    <li className="divider"/>
                                    <li><IndexLink to="/logout" activeClassName="active">Logout</IndexLink></li>
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
    //loading: PropTypes.bool.isRequired
};
