"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";

class ListedBeer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let beer = this.props.beerDetails;
        console.log("Beer details: ", this.props.beerDetails);
        return (
            <div className="container-fluid toDrinkEntry">
                <div className="container">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'/>
                    <div className="beerLogDetails">
                        <a href="/#/beer/{{beer.id}}"><p className="beerLogDetailsBeer">{beer.name}</p></a>
                        <p className="beerLogDetailsBrewery">{beer.breweries[0].name}</p>
                    </div>
                    <div className="col-sm-2 col-sm-offset-9">
                        <span className="pull-right"><img src="/images/updatePending64.png"/></span>
                        <span className="pull-right"><img src="/images/thumbUp64.png"/></span>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-4">
                            <button className="btn btn-default btn-fab"><img src="/images/beerRating.png"/></button>
                        </div>
                    </div>
                </div>
                <div className="subjectBreak container-fluid"></div>
            </div>
            );
    }

}

ListedBeer.propTypes = {
    beerDetails: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        beerDetails: ownProps.beerDetails
    };
}

export default connect(mapStateToProps)(ListedBeer);