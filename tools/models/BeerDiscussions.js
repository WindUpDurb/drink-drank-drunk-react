"use strict";

let mongoose = require("mongoose");

let beerDiscussion = new mongoose.Schema({
    beerId: {type: String},
    comments: [{type : mongoose.Schema.ObjectId, ref : 'beerComments'}]
});

let beerComment = new mongoose.Schema({
    discussion_id: {type: mongoose.Schema.ObjectId, ref: "beerDiscussion"},
    author_email: {type: String},
    comment: {type: String},
    date_posted: new Date("<YYYY-mm-ddTHH:MM:ss>")
});

beerDiscussion.statics.addCommentToDiscussion = function (dataToAdd, callback) {
    BeerDiscussion.findOne({beerId: dataToAdd.beereId}, function (error, databaseDiscussion) {
        if (error) return callback(error);
        if (!databaseDiscussion) {
            BeerDiscussion.create({beerId: dataToAdd.beerId, comments: []}, function (error, newDiscussion) {
                if (error) return callback(error);
                let newComment = {
                    discussion_id: newDiscussion._id,
                    author_email: dataToAdd.authorEmail,
                    comment: dataToAdd.comment
                };
                BeerComment.create(newComment, function (error, savedComment) {
                    if (error) return callback(error);
                    newDiscussion.comments.push(savedComment._id);
                    newDiscussion.save(function (error, savedDiscussion) {
                        //insted of querying the database again
                        // to populate comment, since first comment in discussion
                        savedDiscussion.comments = [];
                        savedDiscussion.comments.push(savedComment);
                       return callback(error, savedDiscussion);
                    });
                });
            });
        } else if (databaseDiscussion) {
            let newComment = {
                discussion_id: databaseDiscussion._id,
                author_email: dataToAdd.authorEmail,
                comment: dataToAdd.comment
            };
            BeerComment.create(newComment, function (error, savedComment) {
                if (error) return callback(error);
                databaseDiscussion.comments.unshift(savedComment._id);
                databaseDiscussion.save(function (error) {
                    if (error) return callback(error);
                    //look into better re-populating 
                    BeerDiscussion.findById(databaseDiscussion._id)
                        .populate("comments")
                        .exec(function (error, populatedDiscussion) {
                            return callback(error, populatedDiscussion);
                        });
                });
            });
        }
    });
};



const BeerDiscussion = mongoose.model("BeerDiscussion", beerDiscussion);
const BeerComment = mongoose.model("BeerComment", beerComment);

module.exports = BeerDiscussion;
