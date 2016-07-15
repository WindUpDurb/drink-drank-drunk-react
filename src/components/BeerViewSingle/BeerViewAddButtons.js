"use strict";

import React, {PropTypes} from "react";
import {AddToToDrinkButton} from "./AddToToDrinkButton";
import {IveHadThisBeerButton} from "./IveHadThisBeerButton";
import {NevermindThisBeerButton} from "./NevermindThisBeerButton";


export const BeerViewAddButtons = ({consumed, updateConsumed, updateToDrink, inToDrink, activeUser}) => {
    if (activeUser) {
        return (
            <div className="container">
                <div className="row text-center">
                    <IveHadThisBeerButton consumed={consumed} updateConsumed={updateConsumed}/>
                    <NevermindThisBeerButton consumed={consumed} updateConsumed={updateConsumed}/>
                    <AddToToDrinkButton inToDrink={inToDrink} updateToDrink={updateToDrink} consumed={consumed}/>
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
    inToDrink: PropTypes.bool,
    consumed: PropTypes.bool,
    activeUser: PropTypes.object,
    updateConsumed: PropTypes.func.isRequired,
    updateToDrink: PropTypes.func.isRequired,
    boolean: PropTypes.bool
};





