"use strict";

import React, {PropTypes} from "react";
import {Link} from "react-router";

export const HomeNavbar = ({login, sendLogout, activeUser, updateSearchFieldState, beerSearch}) => {
    if (activeUser && activeUser.email) {
        return (
            <div className="row">
                <div className="col-sm-2 homeNavText">
                    <Link className="homeNavButton" to="/beerStyles">Browse Beers</Link>
                </div>
                <div className="col-sm-2 homeNavText">
                    <Link className="homeNavButton" to="/breweriesNearby">Find a Brewery</Link>
                </div>
                <div className="col-sm-2 homeNavText">
                    <Link className="homeNavButton" to="/breweriesNearby">Beer Log</Link>
                </div>
                <div className="col-sm-2 homeNavText">
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
                <div className="col-sm-offset-2 col-sm-2 homeNavText">
                    <a onClick={sendLogout} className="homeNavButton">Logout</a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row">
                <div className="col-sm-2 homeNavText">
                    <Link className="homeNavButton" to="/beerStyles">Browse Beers</Link>
                </div>
                <div className="col-sm-2 col-sm-offset-1 homeNavText">
                    <Link className="homeNavButton" to="/breweriesNearby">Find a Brewery</Link>
                </div>
                <div className="col-sm-2">

                </div>
                <div className="col-sm-2 homeNavText">
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
                <div className="col-sm-offset-5 col-sm-2 homeNavText">
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
