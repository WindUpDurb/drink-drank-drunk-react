"use strict";

import React, {PropTypes} from "react";

export const AddComment = ({newComment, cancelComment, updateComment, addComment, beerName, activeUser}) => {
    if (activeUser && activeUser.email) {
        return (
            <div>
                <div className="subjectBreak container-fluid"></div>
                <form onSubmit={addComment} className="form-group">
                    <div className="row">
                        <div className="col-sm-1 text-center col-sm-offset-3">
                            <label className="control-label">{activeUser.given_name}</label>
                            <img className="commentUserImage img-responsive" src={activeUser.picture}/>
                        </div>
                        <div className="col-sm-4">
                            <textarea value={newComment} onChange={updateComment} className="form-control" rows="3" id="textArea" placeholder="Add a public comment to the discussion."/>
                            <span className="help-block">{`What's your thoughts on this ${beerName}`}?</span>
                        </div>
                    </div>

                    <div style={{marginTop: "9px"}} className="row">
                        <div className="col-sm-3 col-sm-offset-6">
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
        return <div></div>;
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