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
        this.state = {
            styleContents: ""
        };
    }

    componentWillMount() {
        let storedData = localStorage[this.props.localStorageKey];
        let dataInState = this.props.currentStyle;
        if (storedData || dataInState) {
            this.setState({styleContents: dataInState || JSON.parse(storedData)});
        } else {
            browserHistory.push("/");
        }

    }

    render() {
        console.log("check: ", this.props.styleDescription)
        let beerResults;
        if (this.state.styleContents) {
            beerResults = this.state.styleContents.map((beer, index) => <ListedBeer key={index} beerData={beer}/>);
        }
        return (
            <div>
                <BeerStyleHeaderAndDirectory
                    styleData={this.props.styleDescription}/>
                <div id="beerDirectoryBody">
                   <div className="container">
                       <div className="row">
                           <div id="directoryMenuDiv" className="well col-sm-10 col-sm-offset-1">
                               <BeerStyleDetails 
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
    beerStyles: PropTypes.object,
    currentStyle: PropTypes.array,
    styleDescription: PropTypes.object,
    BeerActions: PropTypes.object.isRequired,
    currentStyleParam: PropTypes.string.isRequired,
    localStorageKey: PropTypes.string.isRequired,
    pageNumber: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log("own props: ", ownProps)
    let styleInState, styleDescription;
    if (state.beerDirectories.currentBeerStyle) {
        styleInState = state.beerDirectories.currentBeerStyle.styleContents;
        styleDescription = state.beerDirectories.currentBeerStyle.styleContents[0].style;
    }
    return {
        currentStyle: styleInState,
        styleDescription: styleDescription,
        currentStyleParam: ownProps.routeParams.style,
        localStorageKey: `${ownProps.params.style}${ownProps.params.page}`,
        pageNumber: ownProps.params.page
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(BeerStylePage);
