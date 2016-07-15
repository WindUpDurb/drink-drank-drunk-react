"use strict";

import React, {PropTypes} from "react";

export const IveHadThisBeerButton = ({addButtonMethods ,boolean}) => {
    const addBeer = () => {addButtonMethods("addBeer");};
    if (!boolean) {
        return (
            <button onClick={addBeer} type="button" className="btn btn-raised btn-primary">I've had this beer</button>
        );
    } else {
        return <div></div>;
    }

};

IveHadThisBeerButton.propTypes = {
    boolean: PropTypes.bool,
    addButtonMethods: PropTypes.func
};





