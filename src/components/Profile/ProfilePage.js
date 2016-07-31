"use strict";

import React, {PropTypes} from "react";
import * as UserActions from "../../actions/UserActions";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ProfileHeaderAndNav} from "./ProfileHeaderAndNav";
import {BeerLogPageDrank} from "./BeerLogPageDrank";
import {BeerLogPageToDrink} from "./BeerLogPageToDrink";
import {BeerLogAll} from "./BeerLogAll";
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
        if(!this.props.activeUser) {
            browserHistory.push("/");
        }
    }

    leafThroughPages(event) {
        this.setState({beerLogPage: event.target.value});
    }


    render(){
        switch(this.state.beerLogPage) {
            case "Drank":
                this.currentBeerPage = <BeerLogPageDrank beersDrank={this.props.userBeerData.sampledBeers}/>;
                break;
            case "To-Drink":
                this.currentBeerPage = <BeerLogPageToDrink toDrinks={this.props.userBeerData.toDrink}/>;
                break;
            default:
                this.currentBeerPage = null;
        }

        return (
            <div>
                <ProfileHeaderAndNav activeUser={this.props.activeUser}/>
                <div id="beerDirectoryBody">
                    <div className="container">
                        <div className="row">
                            <div id="profileMenuDiv" className="well col-sm-10 col-sm-offset-1">
                               <BeerLogAll
                                    beerAndUserData={this.props.userBeerData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BeerLogPage.propTypes = {
    UserActions: PropTypes.object.isRequired,
    activeUser: PropTypes.object,
    userBeerData: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        activeUser: state.userAndAuth,
        userBeerData: state.userAndAuth.userBeerData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        UserActions: bindActionCreators(UserActions, dispatch)  
    };  
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerLogPage);