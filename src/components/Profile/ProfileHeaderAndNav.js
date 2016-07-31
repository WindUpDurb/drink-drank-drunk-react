"use strict";

import React, {PropTypes} from "react";
import NavbarContainer from "../common/NavbarContainer";


export const ProfileHeaderAndNav = ({activeUser}) => {
    return (
        <div id="parallaxContainerProfile">
            <NavbarContainer
                activeUser={activeUser}
                homePage/>
            <div id="profileCardDiv" className="container text-center">
                <div className="row">
                    <div className="well col-sm-4 col-sm-offset-4" id="activeUserCard">
                        <img className="img-circle userProfileImage" src={activeUser.picture}/>
                        <br/><span className="beerLogDetailsBrewery">{activeUser.given_name}</span>
                        <br/><span className="beerLogDetailsBrewery">{activeUser.email}</span>
                        <br/><span>Maybe add quick stats about user's beers here?</span>
                        <br/><button className="btn btn-primary btn-raised">Beer Log</button>
                        <br/><button className="btn btn-primary btn-raised">Your Beer Images</button>
                        <br/><button className="btn btn-primary btn-raised">Profile Management</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProfileHeaderAndNav.propTypes = {
    activeUser: PropTypes.object
};
