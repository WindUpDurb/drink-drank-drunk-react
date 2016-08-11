"use strict";

import React, {PropTypes} from "react";
import toastr from "toastr";
import {Link} from "react-router";

export const HomeNavbar = ({login, sendLogout, activeUser, updateSearchFieldState, beerSearch}) => {
    const notifyLogin = () => toastr.info("Please Login to Access.");
    if (activeUser && activeUser.email) {
        return (
            <div className="row">
                <div className="col-xs-12 text-center col-md-1 homeNavText">
                    <Link className="homeNavButton" to="/">Home</Link>
                </div>
                <div className="col-xs-12 text-center col-md-2 homeNavText">
                    <Link className="homeNavButton" to="/beerStyles">Browse Beers</Link>
                </div>
                <div className="col-xs-12 text-center col-md-2 homeNavText">
                    <Link className="homeNavButton" to="/breweriesNearby">Find a Brewery</Link>
                </div>
                <div className="col-xs-12 col-md-2 col-md-offset-1 homeNavText">
                    <form onSubmit={beerSearch}>
                        <div className="form-group">
                            <input
                                id="searchBarHome"
                                type="text"
                                onChange={updateSearchFieldState}
                                className="form-control col-sm-8"
                                placeholder="Search"/>
                        </div>
                    </form>
                </div>
                <div className="col-xs-12 text-center col-md-2 homeNavText">
                    <Link className="homeNavButton" to="/profile">Profile</Link>
                </div>
                <div className="col-xs-12 text-center col-md-2 homeNavText">
                    <span onClick={sendLogout} className="homeNavButton">Logout</span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row">
                <div className="col-xs-12 text-center col-md-1 homeNavText">
                    <Link className="homeNavButton" to="/">Home</Link>
                </div>
                <div className="col-xs-12 text-center col-md-2 homeNavText">
                    <Link className="homeNavButton" to="/beerStyles">Browse Beers</Link>
                </div>
                <div className="col-xs-12 text-center col-md-2 homeNavText">
                    <Link className="homeNavButton" to="/breweriesNearby">Find a Brewery</Link>
                </div>
                <div className="col-xs-12 col-md-2 col-md-offset-1 homeNavText">
                    <form onSubmit={beerSearch}>
                        <div className="form-group">
                            <input
                                id="searchBarHome"
                                type="text"
                                onChange={updateSearchFieldState}
                                className="form-control col-sm-8"
                                placeholder="Search"/>
                        </div>
                    </form>
                </div>
                <div className="col-xs-12 text-center col-md-2 homeNavText">
                    <a className="homeNavButton" onClick={notifyLogin}>Profile</a>
                </div>
                <div className="col-xs-12 text-center col-md-2 homeNavText">
                    <a className="homeNavButton" onClick={login}>Login</a>
                </div>
            </div>
        );
    }

};

HomeNavbar.propTypes = {
    sendLogout: PropTypes.func.isRequired,
    beerSearch: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    updateSearchFieldState: PropTypes.func.isRequired,
    activeUser: PropTypes.object
};
