"use strict";

import React, {PropTypes} from "react";
import {BeerComment} from "./BeerComment";

export const CommentsDisplay = ({beerName, comments}) => {
    if (comments && comments.length) {
        let beerComments = comments.map((comment, index )=> <BeerComment key={index} comment={comment}/>);
        return (
            <div id="commentDisplayDiv" className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    {beerComments}
                </div>
            </div>
        );
    } else {
        let firstComment = {
            author_photo: "https://lh6.googleusercontent.com/-QO1uRDREI40/AAAAAAAAAAI/AAAAAAAABnE/PfocMJ-4YTI/photo.jpg",
            author_name: "David Urbina",
            date_posted: new Date().toISOString(),
            comment: `What's your thoughts on this ${beerName}? Be the first to start the discussion. Thanks for visiting, and find me writing on windupdurb.com.`
        };
        return (
            <div id="commentDisplayDiv" className="text-center">
                <div id="commentDisplayDiv" className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        <BeerComment comment={firstComment}/>
                    </div>
                </div>
            </div>
        );
    }

};

CommentsDisplay.propTypes = {
    comments: PropTypes.array,
    beerName: PropTypes.string
};