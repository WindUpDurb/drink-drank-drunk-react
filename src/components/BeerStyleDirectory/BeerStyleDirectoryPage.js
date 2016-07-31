"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import SubHeader from "../common/SubHeader";
import {BeerStyleCategories} from "./BeerStyleCategories";
import {DirectoryHeaderAndNav} from "./DirectoryHeaderAndNav";
import {BeerCategoryStylesMenu} from "./BeerCategoryStylesMenu";
import {bindActionCreators} from "redux";
import * as BeerActions from "../../actions/BeerActions";

class BeerStyleDirectoryPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCategory: null
        };
        this.toggleCategories = this.toggleCategories.bind(this);
        this.grabStyleContentsAndSet = this.grabStyleContentsAndSet.bind(this);
    }

    toggleCategories(styles) {
        this.setState({currentCategory: styles});
    }
    
    grabStyleContentsAndSet(style) {
        console.log('herere', style)
        this.props.BeerActions.fetchStyleContents(style, 1);
    }

    render() {
        let menu;
        if (!this.state.currentCategory) {
            menu = (
                <BeerStyleCategories
                    toggleCategories={this.toggleCategories}
                    beerCategories={this.props.beerDirectories}/>
            );
        } else {
            menu = (
                <BeerCategoryStylesMenu
                    toggleCategories={this.toggleCategories}
                    grabStyle={this.grabStyleContentsAndSet}
                    styles={this.state.currentCategory}/>
            );
        }
        return (
            <div>
                <DirectoryHeaderAndNav
                    activeUser={this.props.activeUserData}/>
                <div id="beerDirectoryBody">
                    <div className="container">
                        <div className="row">
                            <div id="directoryMenuDiv" className="well text-center col-sm-offset-2 col-sm-8">
                                {menu}
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
    activeUser: PropTypes.bool,
    BeerActions: PropTypes.object.isRequired
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

function mapDispatchToProps(dispatch) {
    return {
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerStyleDirectoryPage);
