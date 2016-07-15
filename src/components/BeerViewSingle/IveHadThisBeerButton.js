"use strict";

import React, {PropTypes} from "react";

export const IveHadThisBeerButton = ({consumed, addButtonMethods}) => {
    const addBeer = () => {addButtonMethods("addBeer");};
    console.log("Consumed in button: ", consumed);
    if (!consumed) {
        return (
            <button onClick={addBeer} type="button" className="btn btn-raised btn-primary">I've had this beer</button>
        );
    } else {
        return <div></div>;
    }

};

IveHadThisBeerButton.propTypes = {
    consumed: PropTypes.bool,
    addButtonMethods: PropTypes.func
};





