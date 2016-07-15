"use strict";

import React, {PropTypes} from "react";

export const IveHadThisBeerButton = ({addButtonMethods ,boolean}) => {


    if (!boolean) {
        return (
            <button onClick={addButtonMethods.bind(this, "addBeer")} type="button" className="btn btn-raised btn-primary">I've had this beer</button>
        );
    } else {
        return <div></div>;
    }

};

IveHadThisBeerButton.propTypes = {
    boolean: PropTypes.bool,
    addButtonMethods: PropTypes.func
};





