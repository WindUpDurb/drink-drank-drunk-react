"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";


class SingleBeerPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Beer View</h1>
            </div>
        );
    }

}

SingleBeerPage.propTypes = {
  beerData: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        beerData: state.beerDirectories.currentBeer
    };
}


export default connect(mapStateToProps)(SingleBeerPage);
