"use strict";

import React, {Prototype} from "react";
import {connect} from "react-redux";


class BeerViewSubHeadDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let beerData = this.props.beerData;
        return (
            <div className="container">
                <h1 className="text-center">{beerData.beerData.name}</h1>
                <h3 className="text-center">Brewed By: {beerData.beerData.breweries[0].name || "Brewery name is unavailable."}</h3>

                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div id="beerImageWell" className="well center-block">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"/>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

BeerViewSubHeadDetails.propTypes = {
   //beerData: Prototype.object.isRequired
};

function mapStateToProps(state, ownProps) {

    return {
        beerData: ownProps
    };
}

export default connect(mapStateToProps)(BeerViewSubHeadDetails);




