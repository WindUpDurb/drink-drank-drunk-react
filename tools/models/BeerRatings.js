"use strict";

let mongoose = require("mongoose");

let beerRatingsSchema = new mongoose.Schema({
    beerId: {type: String},
    averageRating: {type: Number},
    sumOfAllRatings: {type: Number},
    totalRatings: {type: Number}
});

beerRatingsSchema.statics.getRating = function (beerId, callback) {
  BeerRatings.findOne({beerId}, function (error, databaseBeer) {
      return callback(error, {databaseBeer});
  });
};

beerRatingsSchema.statics.updateRating = function (ratingToUpdate, callback) {
    BeerRatings.findOne({beerId: ratingToUpdate.beerId}, function(error, databaseBeer) {
        if (error) return callback(error);
        if (!databaseBeer) {
            let newBeerRating = {
                beerId: ratingToUpdate.beerId,
                totalRatings: 1,
                sumOfAllRatings: ratingToUpdate.rating,
                averageRating: ratingToUpdate.rating
            };
            BeerRatings.create(newBeerRating, function(error, newDatabaseBeer) {
                return callback(error, newDatabaseBeer);
            });
        } else {
            if (databaseBeer) {
                if(!ratingToUpdate.previousRating) {
                    databaseBeer.totalRatings++;
                    databaseBeer.sumOfAllRatings = databaseBeer.sumOfAllRatings += parseInt(ratingToUpdate.rating);
                    databaseBeer.averageRating = Math.floor(databaseBeer.sumOfAllRatings / databaseBeer.totalRatings);
                    databaseBeer.save(function(error, savedDatabaseBeer) {
                        return callback(error, savedDatabaseBeer);
                    });
                } else {
                    databaseBeer.sumOfAllRatings = databaseBeer.sumOfAllRatings - parseInt(ratingToUpdate.previousRating) + parseInt(ratingToUpdate.rating);
                    databaseBeer.averageRating = Math.floor(databaseBeer.sumOfAllRatings / databaseBeer.totalRatings);
                    databaseBeer.save(function(error, savedDatabaseBeer) {
                        return callback(error, savedDatabaseBeer);
                    });
                }
            }
        }
    });
};

let BeerRatings = mongoose.model("BeerRatings", beerRatingsSchema);

module.exports = BeerRatings;