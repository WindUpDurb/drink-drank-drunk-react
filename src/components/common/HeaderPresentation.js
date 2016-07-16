"use strict";

import React, {PropTypes} from "react";
import { Link, IndexLink } from "react-router";


export const HeaderPresentation = ({sendLogout, activeUser }) => {
    if (activeUser) {
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
                            <li><Link to="/breweriesNearby" activeClassName="active">Find Nearby Breweries</Link></li>
                            <li><Link to="/beerLog" activeClassName="active">Beer Log</Link></li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                                <input type="text" className="form-control col-sm-8" placeholder="Search"/>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                                    <b className="caret"/></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/account" activeClassName="active">Account</Link></li>
                                    <li className="divider"/>
                                    <li onClick={sendLogout}><Link to="" activeClassName="active">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

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
                        <li><Link to="/breweriesNearby" activeClassName="active">Find Nearby Breweries</Link></li>
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
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

};

HeaderPresentation.propTypes = {
    sendLogout: PropTypes.func.isRequired,
    activeUser: PropTypes.object
};


