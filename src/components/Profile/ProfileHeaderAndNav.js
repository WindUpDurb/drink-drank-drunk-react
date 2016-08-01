"use strict";

import React, {PropTypes} from "react";
import NavbarContainer from "../common/NavbarContainer";
import toast from "toastr";

export const ProfileHeaderAndNav = ({leafThrough, activeUser}) => {
    const notify = (event) => toast.info(event.target.name);
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
                        <br/><button name="BeerLog" onClick={leafThrough} className="btn btn-primary btn-raised">Beer Log</button>
                        <br/><button onClick={notify} type="button" name="This feature is returning shortly" className="btn btn-primary btn-raised">Your Beer Images</button>
                        <br/><button onClick={notify} type="button" name="This section is returning shortly" className="btn btn-primary btn-raised">Profile Management</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProfileHeaderAndNav.propTypes = {
    activeUser: PropTypes.object,
    leafThrough: PropTypes.func.isRequired
};
