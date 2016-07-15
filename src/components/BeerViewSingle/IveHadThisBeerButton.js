"use strict";

import React, {PropTypes} from "react";

export const IveHadThisBeerButton = ({consumed, updateConsumed}) => {
    const addBeer = () => {updateConsumed(true);};
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
    updateConsumed: PropTypes.func
};





