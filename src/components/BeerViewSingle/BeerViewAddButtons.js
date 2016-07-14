"use strict";

import React, {PropTypes} from "react";

export const BeerViewAddButtons = (activeUser) => {

    if (activeUser.activeUser) {
        return (
            <div className="container">
                <div className="row text-center">
                    <a type="button" className="btn btn-raised btn-primary">Register to Rate and Save Beers</a>
                    <div>
                        <button type="button" className="btn btn-raised">Add to your To-Drink List</button>
                    </div>
                    <button type="button" className="btn btn-raised btn-primary">I've had this beer</button>
                    <button type="button" className="btn btn-raised btn-primary">Actually, I've never had this beer.</button>
                </div>
            </div>
        );
    }

    if (!activeUser.activeUser) {
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
    activeUser: PropTypes.object
};





