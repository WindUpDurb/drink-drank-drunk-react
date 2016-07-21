"use strict";

let mongoose = require("mongoose");

let beerRatingsAndDiscussionsSchema = new mongoose.Schema({
    //initial version will be "master"
    version: {type: String},
    //an object with keys for each beer
    //and a value of an object containing total cumulative score, number of ratings, and average
    ratings: {type: String},
    discussions: {type: String}
});

beerRatingsAndDiscussionsSchema.statics.updateRating = function (ratingToUpdate, callback) {
    console.log("Rating to update: ", ratingToUpdate);
    BeerRatingsAndDiscussions.findOne({version: "master"}, function(error, masterVersion) {
        if (error) return callback(error);
        console.log("Master version ", masterVersion);
        if (!masterVersion) {
            BeerRatingsAndDiscussions.create({version: "master"}, function(error, newMasterDatabase) {
                //consider parsing into a string before saving
                newMasterDatabase.ratings[ratingToUpdate.beerId] = {
                    numberOfRatings: 1,
                    sumTotal: ratingToUpdate.rating,
                    average: ratingToUpdate.rating
                };
                newMasterDatabase.save(function(error, savedDatabase) {
                   return callback(error, savedDatabase);
                });
            });
        } else {
            if (masterVersion.ratings.hasOwnProperty(ratingToUpdate.beerId)) {
                let copyToUpdate = Object.assign({}, masterVersion.ratings[ratingToUpdate.beerId]);
                copyToUpdate.numberOfRatings++;
                copyToUpdate.sumTotal += ratingToUpdate.rating;
                copyToUpdate.average = Math.floor(copyToUpdate.sumTotal / copyToUpdate.numberOfRatings);
                let updatedRatingDatabase = Object.assign({}, masterVersion.ratings, {[ratingToUpdate.beerId]: copyToUpdate});
                let updatedMasterVersion = Object.assign({}, masterVersion, {[masterVersion.ratings]: updatedRatingDatabase});
                updatedMasterVersion.save(function(error, savedMasterVersion) {
                    return callback(error, savedMasterVersion);
                });
            } else {
                masterVersion.ratings[ratingToUpdate.beerId] = {
                    numberOfRatings: 1,
                    sumTotal: ratingToUpdate.rating,
                    average: ratingToUpdate.rating
                };
                masterVersion.save(function (error, savedMasterVersion) {
                    return callback(error, savedMasterVersion);
                });
            }
        }
    });
};

let BeerRatingsAndDiscussions = mongoose.model("BeerRatingsAndDiscussions", beerRatingsAndDiscussionsSchema);

module.exports = BeerRatingsAndDiscussions;