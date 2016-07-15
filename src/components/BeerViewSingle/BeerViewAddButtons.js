"use strict";

import React, {PropTypes} from "react";
import {AddToToDrinkButton} from "./AddToToDrinkButton";
import {IveHadThisBeerButton} from "./IveHadThisBeerButton";
import {NevermindThisBeerButton} from "./NevermindThisBeerButton";


export const BeerViewAddButtons = ({consumed, addButtonMethods, activeUser}) => {
    console.log("Consumed in here: ", consumed)
    if (activeUser) {
        return (
            <div className="container">
                <div className="row text-center">
                    <IveHadThisBeerButton consumed={consumed} addButtonMethods={addButtonMethods}/>
                </div>
            </div>
        );
    }

    if (!activeUser) {
        return (
            <div className="container">
                <div className="row text-center">
                    <a type="button" className="btn btn-raised btn-primary">Register to Rate and Save Beers</a>
                </div>
            </div>
        );

    }
    
};

BeerViewAddButtons.propTypes = {
    consumed: PropTypes.bool,
    activeUser: PropTypes.object,
    addButtonMethods: PropTypes.func.isRequired,
    boolean: PropTypes.bool
};





