"use strict";

import React, {PropTypes} from "react";

export const AddToToDrinkButton = ({addButtonMethods, boolean}) => {
    console.log("Add: ", addButtonMethods);
    if (boolean) {
        return (
            <button onClick={addButtonMethods} type="button" className="btn btn-raised btn-primary">Add To Your To-Drink List</button>
        );
    } else {
        return <div></div>;
    }

};

AddToToDrinkButton.propTypes = {
    boolean: PropTypes.bool,
    addButtonMethods: PropTypes.func.isRequired
};





