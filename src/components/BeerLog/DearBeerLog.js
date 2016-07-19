"use strict";

import React, {PropTypes} from "react";

export const DearBeerLog = ({firstName}) => {
  
    return (
        <div id="dearBeerLogDiv">
            <div className="row text-center">
                <div className="col-xs-6 col-sm-3">
                    <img src="/statics/pint.png" className="img-responsive dearBeerLogIcons"/>
                </div>
                <div className="hidden-xs col-sm-6">
                    <h2 className="text-muted">Dear Beer Log</h2>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <img src="/statics/log.png" className="img-responsive dearBeerLogIcons"/>
                </div>
                <div className="visible-xs-block col-xs-12">
                    <h2 className="text-muted">Dear Beer Log</h2>
                </div>
            </div>
            <div className="row">
                <div className="text-justify col-xs-12 col-sm-10 col-sm-offset-1">

                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <p className="styleDescriptionText">Please find enclosed the beers that I've come across.</p>
                            <p className="styleDescriptionText">Beers that I've consumed will be marked with a <img src="/statics/beerIconConsumed32.png"/>.</p>
                            <p className="styleDescriptionText">Beers that I've not consumed will be marked with a <img src="/statics/beerIconNoConsumed32.png"/>.</p>
                            <p className="styleDescriptionText">Beers that have been stamped with <img src="/statics/thumbUp32.png"/> have been verified in the database.</p>
                            <p className="styleDescriptionText">Beers that have been stamped with <img src="/statics/updatePending32.png"/> are pending verification.</p>
                            <p className="styleDescriptionText">Love, </p>
                            <p className="styleDescriptionText">{firstName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DearBeerLog.propTypes = {
    firstName: PropTypes.string
};