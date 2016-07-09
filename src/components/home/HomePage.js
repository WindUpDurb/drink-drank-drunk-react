"use strict";

import React from "react";
import { Link } from "react-router";
import DrinkDrankDrunkSection from "./DrinkDrankDrunkSection";
import DescriptionSection from "./DescriptionSection";
import FooterSection from "../common/FooterSection";

class HomePage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <DrinkDrankDrunkSection/>
                <DescriptionSection/>
                <FooterSection/>
            </div>
        );
    }
}

export default HomePage;

