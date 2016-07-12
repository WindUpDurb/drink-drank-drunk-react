"use strict";

import React, {PropTypes} from "react";
import BeerViewHead from "./BeerViewHead";
import BeerViewSubHeadDetails from "./BeerViewSubHeadDetails";
import {connect} from "react-redux";


class SingleBeerPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Beer View</h1>
                <BeerViewHead beerData={this.props.beerData}/>
                <BeerViewSubHeadDetails beerData={this.props.beerData}/>
            </div>
        );
    }

}

SingleBeerPage.propTypes = {
  beerData: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log("State in hurr: ", state);
    return {
        beerData: state.beerDirectories.currentBeer
    };
}


export default connect(mapStateToProps)(SingleBeerPage);
