"use strict";

import React, {PropTypes} from "react";
import {BeerViewHead} from "./BeerViewHead";
import {BeerViewSubHeadDetails} from "./BeerViewSubHeadDetails";
import {BeerViewAddButtons} from "./BeerViewAddButtons";
import {BeerDetailsAndStats} from "./BeerViewDetailsAndStats";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {browserHistory} from "react-router";
import {BeerViewSingleHeaderAndDirectory} from "./BeerViewSingleHeaderAndDirectory";
import {AddComment} from "./AddComent";
import {CommentsDisplay} from "./CommentsDisplay";
import * as BeerActions from "../../actions/BeerActions";
import * as Auth0Actions from "../../actions/Auth0Actions";


//combine into one function that spits out all three:
function checkIfConsumed (beerId, userBeerData) {
    for (let i = 0; i < userBeerData.sampledBeers.length; i++) {
        if (userBeerData.sampledBeers[i].beerId === beerId) {
            return true;
        }
    }
    return false;
}

function checkIfInToDrink (beerId, userBeerData) {
    for (let i = 0; i < userBeerData.toDrink.length; i++) {
        if (userBeerData.toDrink[i].beerId === beerId) {
            return true;
        }
    }
    return false;
}

function returnBeerRating(beerId, userBeerData) {
    for (let i = 0; i < userBeerData.sampledBeers.length; i++) {
        if (userBeerData.sampledBeers[i].beerId === beerId) {
            return userBeerData.sampledBeers[i].beerRating;
        }
    }
}


class SingleBeerPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            beerData: null,
            newComment: "",
            globalBeerRating: 0,
            beerDiscussion: []
        };
        this.updateConsumed = this.updateConsumed.bind(this);
        this.updateToDrink = this.updateToDrink.bind(this);
        this.updateBeerRating = this.updateBeerRating.bind(this);
        this.addNewComment = this.addNewComment.bind(this);
        this.updateCommentState = this.updateCommentState.bind(this);
        this.cancelComment = this.cancelComment.bind(this);
        this.login = this.login.bind(this);
    }

    componentWillMount() {
        //for discussion and ratings
        if (this.props.beerData) {
            this.props.BeerActions.grabSupplementalBeerData(this.props.beerId);
        } else {
            browserHistory.push("/");
        }
    }

    login () {
        this.props.Auth0Actions.login();
    }

    updateConsumed(consumed) {
        let beerData = this.state.beerData || this.props.beerData;
        let userBeerData = this.props.userBeerData;
        if (consumed) {
            this.props.BeerActions.changeIfConsumed(true, beerData, userBeerData);
        } else {
            this.props.BeerActions.changeIfConsumed(false, beerData, userBeerData);
        }
    }
    
    updateBeerRating(event) {
        let beerData = this.state.beerData || this.props.beerData;
        let userBeerData = this.props.userBeerData;
        let newRating = event.target.value;
        this.props.BeerActions.saveBeerRating(beerData, userBeerData, newRating);
    }

    updateToDrink() {
        let beerData = this.state.beerData || this.props.beerData;
        let userBeerData = this.props.userBeerData;
        this.props.BeerActions.addToDrink(beerData, userBeerData);
    }

    cancelComment() {
        return this.setState({newComment: ""});
    }

    addNewComment(event) {
        event.preventDefault();
        let newComment = this.state.newComment;
        let beerId = this.props.beerId;
        let user = this.props.activeUser.email;
        let photo = this.props.activeUser.picture;
        let userName = this.props.activeUser.given_name;
        this.props.BeerActions.addBeerComment(newComment, beerId, user, photo, userName);
        this.setState({newComment: ""});
    }

    updateCommentState(event) {
        let comment = event.target.value;
        return this.setState({newComment: comment});

    }

    render(){
        let consumed, inToDrink, personalRating, beerData, beerName, userBeerData;
        if (this.props.beerData) {
            beerData = this.props.beerData;
            beerName = beerData.name;
            userBeerData = this.props.userBeerData;
        }
        if (this.props.userBeerData) {
            userBeerData = this.props.userBeerData;
            consumed = checkIfConsumed(beerData.id, userBeerData);
            inToDrink = checkIfInToDrink(beerData.id, userBeerData);
            personalRating = returnBeerRating(beerData.id, userBeerData);
        }
                return (
            <div id="beerViewPage">
                <BeerViewSingleHeaderAndDirectory/>
                <div id="beerDirectoryBody">
                    <div className="container">
                        <div id="beerViewHeading" className="row">
                            <div id="directoryMenuSingleDiv" className="well col-sm-12">


                                <BeerViewHead
                                    consumed={consumed}
                                    globalRating={this.props.globalRating}
                                    personalRating={personalRating}
                                    updateBeerRating={this.updateBeerRating}
                                    beerData={beerData}
                                    activeUser={userBeerData}/>
                                <BeerViewSubHeadDetails beerData={beerData}/>
                                <BeerViewAddButtons
                                    login={this.login}
                                    consumed={consumed}
                                    updateConsumed={this.updateConsumed}
                                    updateToDrink={this.updateToDrink}
                                    inToDrink={inToDrink}
                                    activeUser={userBeerData}/>
                                <BeerDetailsAndStats beerData={beerData}/>

                                <AddComment
                                    newComment={this.state.newComment}
                                    cancelComment={this.cancelComment}
                                    updateComment={this.updateCommentState}
                                    addComment={this.addNewComment}
                                    beerName={beerName}
                                    activeUser={this.props.activeUser}/>

                                <CommentsDisplay
                                    beerName={beerName}
                                    comments={this.props.beerDiscussion}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


SingleBeerPage.propTypes = {
    beerData: PropTypes.object,
    BeerActions: PropTypes.object.isRequired,
    Auth0Actions: PropTypes.object.isRequired,
    beerId: PropTypes.string.isRequired,
    activeUser: PropTypes.object,
    userBeerData: PropTypes.object,
    beerDiscussion: PropTypes.array,
    globalRating: PropTypes.number
};

function mapStateToProps(state, ownProps) {
    let activeUser, userBeerData, globalRating, beerDiscussion, beerData;
    if (state.beerDirectories.currentBeer) {
        beerData = state.beerDirectories.currentBeer;
    }
    let beerId = ownProps.params.beerId;
    let supplemental = Object.assign({}, state.beerRatingAndDiscussion);
    if (state.userAndAuth) {
        activeUser = Object.assign({}, state.userAndAuth);
        userBeerData = Object.assign({}, state.userAndAuth.userBeerData);
    }

    if (supplemental && supplemental.beerDiscussion && supplemental.beerDiscussion.beerId === beerId) {
        beerDiscussion = supplemental.beerDiscussion.comments;
    }
    if (supplemental && supplemental.globalBeerRating && supplemental.globalBeerRating.beerId === beerId) {
        globalRating = supplemental.globalBeerRating.averageRating;
    }
    
    return {
        beerData,
        beerId,
        activeUser: activeUser,
        userBeerData: userBeerData,
        beerDiscussion,
        globalRating
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BeerActions: bindActionCreators(BeerActions, dispatch),
        Auth0Actions: bindActionCreators(Auth0Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBeerPage);
