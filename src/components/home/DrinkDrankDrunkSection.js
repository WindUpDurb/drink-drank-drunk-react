"use strict";

import React from "react";

const DrinkDrankDrunkSection = () => {

    return (
        <div className="header-container">
            <h1 className="drink-drank-drunk-header-text">Drink, Drank, Drunk</h1>
            <p className="home-header-foreword">You think you need a beer.
                <br/>We agree.</p>
            <div className="row">
                <div className="col-sm-4">
                    <div id="containerBeerAnimation">
                        <div className="pour"></div>
                        <div id="beaker">
                            <div className="beer-foam">
                                <div className="foam-1"></div>
                                <div className="foam-2"></div>
                                <div className="foam-3"></div>
                                <div className="foam-4"></div>
                                <div className="foam-5"></div>
                                <div className="foam-6"></div>
                                <div className="foam-7"></div>
                            </div>

                            <div id="liquid">

                                <div className="bubble bubble1"></div>
                                <div className="bubble bubble2"></div>
                                <div className="bubble bubble3"></div>
                                <div className="bubble bubble4"></div>
                                <div className="bubble bubble5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrinkDrankDrunkSection;