"use strict";

import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as BeerActions from "../../actions/BeerActions";
import {browserHistory} from "react-router";


class ListedBeer extends React.Component {
    constructor(props) {
        super(props);
        this.fetchBeerAndSet = this.fetchBeerAndSet.bind(this);
    }

    fetchBeerAndSet() {
        this.props.actions.fetchBeerData(this.props.beerDetails.id || this.props.beerDetails.beerId)
            .then(response => {
                browserHistory.push(`/beer/${this.props.beerDetails.id || this.props.beerDetails.beerId}`);
            })
            .catch(error => {
               console.log("Error: ", error);
            });
    }

    render() {
        let beer = this.props.beerDetails;
        let beerLabel;
        if (beer.labels) {
            beerLabel = beer.labels.medium || beer.labels.icon;
        } else {
            beerLabel = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
        }
        return (
            <div className="container-fluid toDrinkEntry">
                <div className="container">
                    <img src={beerLabel}/>
                    <div className="beerLogDetails">
                        <a onClick={this.fetchBeerAndSet}><p className="beerLogDetailsBeer">{beer.name || beer.beerName}</p></a>
                        <p className="beerLogDetailsBrewery">{beer.breweryName ||beer.breweries[0].name}</p>
                    </div>
                    <div className="col-sm-2 col-sm-offset-9">
                        <span className="pull-right"><img src="/statics/updatePending64.png"/></span>
                        <span className="pull-right"><img src="/statics/thumbUp64.png"/></span>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-4">
                            <button className="btn btn-default btn-fab"><img src="/statics/beerRating.png"/></button>
                        </div>
                    </div>
                </div>
                <div className="subjectBreak container-fluid"></div>
            </div>
            );
    }

}

ListedBeer.propTypes = {
    beerDetails: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(BeerActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {
        beerDetails: ownProps.beerDetails
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListedBeer);