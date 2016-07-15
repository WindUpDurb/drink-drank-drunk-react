"use strict";

import React, {PropTypes} from "react";
import {AddToToDrinkButton} from "./AddToToDrinkButton";
import {IveHadThisBeerButton} from "./IveHadThisBeerButton";
import {NevermindThisBeerButton} from "./NevermindThisBeerButton";


export const BeerViewAddButtons = ({addButtonMethods, activeUser}) => {
    console.log("Active User: ", activeUser);
    console.log("Add button methods: ", addButtonMethods);
    if (activeUser) {
        return (
            <div className="container">
                <div className="row text-center">
                    <IveHadThisBeerButton addButtonMethods={addButtonMethods}/>
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
    activeUser: PropTypes.object,
    addButtonMethods: PropTypes.func.isRequired,
    boolean: PropTypes.bool
};





