"use strict";

import React, {PropTypes} from "react";
import NavbarContainer from "../common/NavbarContainer";


const DrinkDrankDrunkSection = ({activeUser}) => {
    return (
        <div className="text-center" id="parallaxContainerHome">
            <NavbarContainer
                activeUser={activeUser}
                homePage/>
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

DrinkDrankDrunkSection.propTypes = {
    activeUser: PropTypes.object
};

export default DrinkDrankDrunkSection;