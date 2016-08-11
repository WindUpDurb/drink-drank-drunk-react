"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";
import BeerStyleDetails from "./BeerStyleDetails";
import {BeerStyleHeaderAndDirectory} from "./BeerStyleHeaderAndDirectory";
import {ListedBeer} from "../common/ListedBeer";
import {bindActionCreators} from "redux";
import * as BeerActions from "../../actions/BeerActions";
import {browserHistory} from "react-router";

function grabDirectoryDetails (currentDirectory, directories) {

}

class BeerStylePage extends React.Component {
    constructor(props) {
        super(props);
        this.setBeerAndTransition = this.setBeerAndTransition.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentWillMount() {
        if (!this.props.currentStyle) {
            browserHistory.push("/");
        }
    }

    setBeerAndTransition(beerData) {
        this.props.BeerActions.setCurrentBeerAndTransistion(beerData);
    }
    
    changePage(page) {
        let currentPage = parseInt(this.props.pageNumber);
        let style = parseInt(this.props.currentStyleParam);
        if (page === "previous") this.props.BeerActions.fetchStyleContents(style, currentPage - 1);
        if (page === "next") this.props.BeerActions.fetchStyleContents(style, currentPage + 1);
    }

    render() {
        let beerResults;
        if (this.props.currentStyle) {
            beerResults = (
                this.props.currentStyle.map((beer, index) => <ListedBeer
                    inProfile={false}
                    setBeer={this.setBeerAndTransition}
                    key={index} 
                    beerData={beer}/>)
            );
        }
        return (
            <div>
                <BeerStyleHeaderAndDirectory
                    activeUser={this.props.activeUser}
                    styleData={this.props.styleDescription}/>
                <div id="beerDirectoryBody">
                   <div className="container">
                       <div className="row">
                           <div id="directoryMenuDiv" className="well col-sm-10 col-sm-offset-1">
                               <BeerStyleDetails
                                   changePage={this.changePage}
                                   nextPage={this.props.nextPage}
                                   previousPage={this.props.previousPage}
                                   pageNumber={this.props.pageNumber}
                                   beerStyle={this.props.styleDescription}/>
                               {beerResults}
                           </div>
                       </div>
                   </div>
                </div>

            </div>
        );
    }
}

BeerStylePage.propTypes = {
    activeUser: PropTypes.object,
    beerStyles: PropTypes.object,
    currentStyle: PropTypes.array,
    styleDescription: PropTypes.object,
    BeerActions: PropTypes.object.isRequired,
    currentStyleParam: PropTypes.string.isRequired,
    localStorageKey: PropTypes.string.isRequired,
    pageNumber: PropTypes.string.isRequired,
    previousPage: PropTypes.bool,
    nextPage: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    let styleInState, styleDescription, activeUser, previousPage, nextPage;
    if (state.beerDirectories.currentBeerStyle && state.beerDirectories.currentBeerStyle.styleContents) {
        let currentStyle = state.beerDirectories.currentBeerStyle;
        styleInState = currentStyle.styleContents;
        styleDescription = currentStyle.styleContents[0].style;
        if (currentStyle.currentPage > 1) previousPage = true;
        if (currentStyle.currentPage <= currentStyle.numberOfPages) nextPage = true;
    }
    if (state.userAndAuth && state.userAndAuth.email) {
        activeUser = Object.assign({}, state.userAndAuth);
    }
    return {
        currentStyle: styleInState,
        styleDescription: styleDescription,
        currentStyleParam: ownProps.routeParams.style,
        localStorageKey: `${ownProps.params.style}${ownProps.params.page}`,
        pageNumber: ownProps.params.page,
        activeUser,
        previousPage,
        nextPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(BeerStylePage);
