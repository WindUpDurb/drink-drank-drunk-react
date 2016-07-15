"use strict";

import React, {PropTypes} from "react";

export const NevermindThisBeerButton = (boolean) => {
    if (boolean) {
        return (
            <button type="button" className="btn btn-raised btn-primary">Actually, I've never had this beer</button>
        );
    } else {
        return <div></div>;
    }

};

NevermindThisBeerButton.propTypes = {
    boolean: PropTypes.boolean
};





