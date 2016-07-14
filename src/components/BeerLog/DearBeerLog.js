"use strict";

import React from "react";

export const DearBeerLog = () => {
  
    return (
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
    );
    
};