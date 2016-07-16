"use strict";

import React from "react";
import { Link } from "react-router";
import DrinkDrankDrunkSection from "./DrinkDrankDrunkSection";
import DescriptionSection from "./DescriptionSection";
import $ from "jquery";

function animateBeer() {
    $(document).ready(function() {
        $('.pour') //Pour Me Another Drink, Bartender!
            .delay(2000)
            .animate({
                height: '360px'
            }, 1500)
            .delay(1600)
            .slideUp(500);

        $('#liquid') // I Said Fill 'Er Up!
            .delay(3400)
            .animate({
                height: '170px'
            }, 2500);

        $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
            .delay(3400)
            .animate({
                bottom: '200px'
            }, 2500);
    });
}

class HomePage extends React.Component {
    render() {
        animateBeer();
        return (
            <div>
                <DrinkDrankDrunkSection/>
                <DescriptionSection/>
            </div>
        );
    }
}

export default HomePage;

