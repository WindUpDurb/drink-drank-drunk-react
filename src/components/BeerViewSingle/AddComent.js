"use strict";

import React, {PropTypes} from "react";

export const AddComment = ({newComment, cancelComment, updateComment, addComment, beerName, activeUser}) => {
    if (activeUser && activeUser.email) {
        return (
            <div id="addCommentDiv">
                <div className="subjectBreak container-fluid"></div>
                <form onSubmit={addComment} className="form-group">
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-1 col-md-1 text-center col-md-offset-3">
                            <label className="control-label">{activeUser.given_name}</label>
                            <img className="commentUserImage img-responsive" src={activeUser.picture}/>
                        </div>
                        <div className="col-xs-7 col-md-4">
                            <textarea value={newComment} onChange={updateComment} className="form-control" rows="3" id="textArea" placeholder="Add a public comment to the discussion."/>
                            <span className="help-block">{`What's your thoughts on this ${beerName}`}?</span>
                        </div>
                    </div>

                    <div style={{marginTop: "9px"}} className="row">
                        <div className="col-xs-5 col-xs-offset-5 col-md-3 col-md-offset-6">
                            <span className="cancelComment">
                                <button type="button" onClick={cancelComment} className="btn btn-raised btn-default btn-sm">Cancel</button>
                            </span>
                            <button type="submit" className="btn btn-raised btn-primary btn-sm">Post</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div className="container text-center" id="addCommentDiv">
                <div className="subjectBreak container-fluid"></div>
                <h3>Login to join the discussion on {beerName}</h3>
            </div>
        );
    }
};

AddComment.propTypes = {
    activeUser: PropTypes.object,
    addComment: PropTypes.func.isRequired,
    cancelComment: PropTypes.func.isRequired,
    updateComment: PropTypes.func.isRequired,
    beerName: PropTypes.string,
    newComment: PropTypes.string
};