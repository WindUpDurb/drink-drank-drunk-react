"use strict";

import React from "react";
import DrinkDrankDrunkSection from "./DrinkDrankDrunkSection";
import DescriptionSection from "./DescriptionSection";
import $ from "jquery";

function animateBeer() {
    $(document).ready(function() {
        $('.pour')
            .delay(2000)
            .animate({
                height: '360px'
            }, 1500)
            .delay(1600)
            .slideUp(500);

        $('#liquid')
            .delay(3400)
            .animate({
                height: '170px'
            }, 2500);

        $('.beer-foam')
            .delay(3400)
            .animate({
                bottom: '200px'
            }, 2500);
    });
}

class HomePage extends React.Component {

    componentDidMount(){
        animateBeer();
    }

    render() {
        return (
            <div>
                <DrinkDrankDrunkSection/>
                <DescriptionSection/>
            </div>
        );
    }
}

export default HomePage;

