"use strict";

import React from "react";
import { Link } from "react-router";
import DrinkDrankDrunkSection from "./DrinkDrankDrunkSection";
import DescriptionSection from "./DescriptionSection";
import FooterSection from "../common/FooterSection";
import $ from "jquery";

class HomePage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <DrinkDrankDrunkSection/>
                <DescriptionSection/>
            </div>
        );
    }
}

export default HomePage;

