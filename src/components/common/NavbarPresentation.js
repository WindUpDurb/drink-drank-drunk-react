"use strict";

import React, {PropTypes} from "react";
import { Link, IndexLink } from "react-router";

///Check the navbar in the home component as well

export const NavbarPresentation = ({sendLogout, login, activeUser, updateSearchFieldState,beerSearch }) => {
    if (activeUser && activeUser.email) {
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
                        <form className="navbar-form navbar-left" onSubmit={beerSearch}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    onChange={updateSearchFieldState}
                                    className="form-control col-sm-8"
                                    placeholder="Search"/>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img className="img-responsive img-rounded" src={activeUser.picture} id="gmailPicture"/>
                                    <b className="caret"/></a>
                                <ul className="dropdown-menu">
                                    <li><span id="dropdownTextName">{activeUser.name}</span>
                                        <br/> <span id="dropdownTextEmail">{activeUser.email}</span>
                                    </li>
                                    <li className="divider"/>
                                    <li onClick={sendLogout}><Link to="/home" activeClassName="active">Logout</Link></li>
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
                    <form className="navbar-form navbar-left"  onSubmit={beerSearch}>
                        <div className="form-group">
                            <input type="text"
                                   onChange={updateSearchFieldState}
                                   className="form-control col-sm-8"
                                   placeholder="Search"/>
                        </div>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Profile
                                <b className="caret"/></a>
                            <ul className="dropdown-menu">
                                <li><a onClick={login}>Login with your Google Account</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

};

NavbarPresentation.propTypes = {
    sendLogout: PropTypes.func.isRequired,
    beerSearch: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    updateSearchFieldState: PropTypes.func.isRequired,
    activeUser: PropTypes.object
};


