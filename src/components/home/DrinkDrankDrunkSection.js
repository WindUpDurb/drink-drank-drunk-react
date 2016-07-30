"use strict";

import React from "react";

const DrinkDrankDrunkSection = () => {
    
    return (
        <div className="text-center" id="parallaxContainerHome">
            <div className="row">
                <div className="col-sm-2 homeNavText">
                    Browse Beers
                </div>
                <div className="col-sm-2 homeNavText">
                    Find a Brewery
                </div>
                <div className="col-sm-offset-6 col-sm-2 homeNavText">
                    Login/Logout
                </div>
            </div>
            <div id="dddTextDiv">
                <span className="drinkdrankdrunkSecondary">Because beer</span>
                <br/>
                <span id="drinkdrankdrunkText">Drink, Drank, Drunk</span>
                <br/>
                <span className="drinkdrankdrunkSecondary">is beer.</span>
            </div>
            <div id="dddButtonDiv">
                <button id="dddButton" className="btn btn-raised">How about this beer?</button>
            </div>
        </div>
    );
};

export default DrinkDrankDrunkSection;
