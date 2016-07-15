"use strict";

import React, {PropTypes} from "react";

export const NevermindThisBeerButton = ({consumed, updateConsumed}) => {
    const neverMind = () => {updateConsumed(false);};
    if (consumed) {
        return (
            <button onClick={neverMind} type="button" className="btn btn-raised btn-primary">Actually, I've never had this beer</button>
        );
    } else {
        return <div></div>;
    }
};

NevermindThisBeerButton.propTypes = {
    consumed: PropTypes.bool,
    updateConsumed: PropTypes.func.isRequired
};





