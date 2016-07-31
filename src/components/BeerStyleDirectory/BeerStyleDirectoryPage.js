"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import SubHeader from "../common/SubHeader";
import {BeerStyleCategories} from "./BeerStyleCategories";
import {DirectoryHeaderAndNav} from "./DirectoryHeaderAndNav";

class BeerStyleDirectoryPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("styles: ", this.props.beerDirectories)
        return (
            <div>
                <DirectoryHeaderAndNav
                    activeUser={this.props.activeUserData}/>
                <div id="beerDirectoryBody">
                    <div className="container">
                        <div className="row">
                            <div className="well text-center col-sm-offset-2 col-sm-8">
                                <BeerStyleCategories beerCategories={this.props.beerDirectories}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

BeerStyleDirectoryPage.propTypes = {
    beerDirectories: PropTypes.object,
    activeUserData: PropTypes.object,
    activeUser: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    let activeUser;
    let activeUserData;
    if (state.userAndAuth && state.userAndAuth.email) {
        activeUser = true;
        activeUserData = state.userAndAuth;
    }
    return {
        beerDirectories: state.beerDirectories.beerDirectories,
        activeUser,
        activeUserData
    };
}

export default connect(mapStateToProps)(BeerStyleDirectoryPage);
