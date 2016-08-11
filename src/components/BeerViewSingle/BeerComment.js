"use strict";

import React, {PropTypes} from "react";

export const BeerComment = ({comment}) => {
    let datePosted = comment.date_posted.split("T")[0];
    let style = {
        backgroundColor: "white",
        marginTop: "15px",
        marginBottom: "15px"
    };
    return (
        <div className="well" style={style}>
            <div className="row">
                <div className="col-xs-2 col-md-2">
                    <img className="postedCommentUserImage img-responsive" src={comment.author_photo} />
                </div>
                <div style={{textAlign: "justify"}} className="col-xs-10 col-md-9">
                    <span className="commentAuthorName">{comment.author_name}</span>
                    <span className="commentDate">{datePosted}</span>
                    <br/>
                    <span className="commentBody">{comment.comment}</span>
                </div>
            </div>
        </div>
    );
};

BeerComment.propTypes = {
    comment: PropTypes.object.isRequired
};