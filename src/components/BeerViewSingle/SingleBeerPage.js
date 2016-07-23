"use strict";

import React, {PropTypes} from "react";
import {BeerViewHead} from "./BeerViewHead";
import {BeerViewSubHeadDetails} from "./BeerViewSubHeadDetails";
import {BeerViewAddButtons} from "./BeerViewAddButtons";
import {BeerDetailsAndStats} from "./BeerViewDetailsAndStats";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import SubHeader from "../common/SubHeader";
import {AddComment} from "./AddComent";
import {CommentsDisplay} from "./CommentsDisplay";
import * as BeerActions from "../../actions/BeerActions";

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

function generateBeerViewHeading(beerName) {
    let headingList = [`Here's a single serving of ${beerName}.`, `Let's see. Here's a ${beerName}.`, `Drink up. Here's a ${beerName}.`, `You looked parched. How about a ${beerName}.`, `Catch this ${beerName}.`, `Quick. Shotgun this ${beerName}. Now.`, `No, this? It's just a ${beerName}.`];
    return headingList[Math.floor(Math.random() * headingList.length)];
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
    }

    componentWillMount() {
        let storedData = localStorage[this.props.beerId];
        if (storedData) {
            this.setState({beerData: JSON.parse(storedData)});
        }
        this.props.BeerActions.grabSupplementalBeerData(this.props.beerId);
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
        let consumed, inToDrink, personalRating;
        let beerData = this.state.beerData || this.props.beerData;
        let userBeerData = this.props.userBeerData || null;
        let beerViewHeading = generateBeerViewHeading(beerData.name);
        if (userBeerData) {
            consumed = checkIfConsumed(beerData.id, userBeerData);
            inToDrink = checkIfInToDrink(beerData.id, userBeerData);
            personalRating = returnBeerRating(beerData.id, userBeerData);
        }
                return (
            <div id="beerViewPage">
                <SubHeader/>
                <div id="beerViewHeading" className="row">
                    <div className="col-sm-6 col-sm-offset-1">
                        <h3 className="text-center directoryHeadingText greyText">{beerViewHeading}</h3>
                    </div>
                </div>
                <BeerViewHead consumed={consumed}
                              globalRating={this.props.globalRating}
                              personalRating={personalRating}
                              updateBeerRating={this.updateBeerRating}
                              beerData={beerData} 
                              activeUser={userBeerData}/>
                <BeerViewSubHeadDetails beerData={beerData}/>
                <BeerViewAddButtons consumed={consumed} 
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
                    beerName={this.state.beerData.name}
                    activeUser={this.props.activeUser}/>

                <CommentsDisplay
                    comments={this.props.beerDiscussion}/>

            </div>
        );
    }

}


SingleBeerPage.propTypes = {
    beerData: PropTypes.object,
    BeerActions: PropTypes.object.isRequired,
    beerId: PropTypes.string.isRequired,
    activeUser: PropTypes.object,
    userBeerData: PropTypes.object,
    beerDiscussion: PropTypes.array,
    globalRating: PropTypes.number
};

function mapStateToProps(state, ownProps) {
    let activeUser, userBeerData, globalRating, beerDiscussion;
    let beerId = ownProps.params.beerId;
    let supplemental = state.beerRatingAndDiscussion;
    if (state.userAndAuth) {
        activeUser = state.userAndAuth;
        userBeerData = state.userAndAuth.userBeerData;
    }

    if (supplemental && supplemental.beerDiscussion && supplemental.beerDiscussion.beerId === beerId) {
        beerDiscussion = supplemental.beerDiscussion.comments;
    }
    if (supplemental && supplemental.globalBeerRating && supplemental.globalBeerRating.beerId === beerId) {
        globalRating = supplemental.globalBeerRating.averageRating;
    }


    return {
        beerData: state.beerDirectories.currentBeer,
        beerId,
        activeUser: activeUser,
        userBeerData: userBeerData,
        beerDiscussion,
        globalRating
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BeerActions: bindActionCreators(BeerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBeerPage);
