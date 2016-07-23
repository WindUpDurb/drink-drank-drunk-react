"use strict";

import React, {PropTypes} from "react";
import {BeerComment} from "./BeerComment";

export const CommentsDisplay = ({comments}) => {
    let beerComments;
    if (comments) {
       beerComments = comments.map((comment, index )=> <BeerComment key={index} comment={comment}/>);
    }
    if (comments && comments.length) {
        return (
            <div id="commentDisplayDiv" className="col-sm-8 col-sm-offset-2">
                {beerComments}
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }

};

CommentsDisplay.propTypes = {
    comments: PropTypes.array
};