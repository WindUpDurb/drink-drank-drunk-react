"use strict";

import React, {PropTypes} from "react";

export const AddToToDrinkButton = ({inToDrink, updateToDrink, consumed}) => {
    const oneDay = () => {updateToDrink();};
    if (consumed && !inToDrink) {
        return (
            <button onClick={oneDay} type="button" className="btn btn-raised btn-primary">Add To Your To-Drink List</button>
        );
    } else {
        return <div></div>;
    }

};

AddToToDrinkButton.propTypes = {
    inToDrink: PropTypes.bool,
    consumed: PropTypes.bool,
    updateToDrink: PropTypes.func.isRequired
};





