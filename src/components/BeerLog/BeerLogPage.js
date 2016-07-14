"use strict";

import React, {PropTypes} from "react";
import * as UserActions from "../../actions/UserActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {DearBeerLog} from "./DearBeerLog";
import {BeerLogPageDrank} from "./BeerLogPageDrank";
import {BeerLogPageToDrink} from "./BeerLogPageToDrink";
import {BeerLogPageChoose} from "./BeerLogPageChoose";

class BeerLogPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            beerLogPage: ""
        };

        this.leafThroughPages = this.leafThroughPages.bind(this);
    }

    componentWillMount() {
        this.props.UserActions.securitySearch();
    }

    leafThroughPages(event) {
        console.log(event.target.value);
        this.setState({beerLogPage: event.target.value});
    }


    render(){
        switch(this.state.beerLogPage) {
            case "Drank":
                this.currentBeerPage = <BeerLogPageDrank/>;
                break;
            case "To-Drink":
                this.currentBeerPage = <BeerLogPageToDrink/>;
                break;
            default:
                this.currentBeerPage = null;
        }

        return (
            <div className="container">
                <DearBeerLog />
                <BeerLogPageChoose leafThroughPages={this.leafThroughPages}/>
                {this.currentBeerPage}
            </div>
        );
    }
}

BeerLogPage.propTypes = {
    UserActions: PropTypes.object.isRequired,
    activeUser: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log("State ni hurr: ", state);
    return {
        activeUser: state.userAndAuth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)  
    };  
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerLogPage);