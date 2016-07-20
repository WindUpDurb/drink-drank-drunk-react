"use strict";

const YelpAPI = require("yelp");

const Yelp = new YelpAPI({
    consumer_key: process.env.YELP_CONSUMER_KEY,
    consumer_secret: process.env.YELP_CONSUMER_SECRET,
    token: process.env.YELP_TOKEN,
    token_secret: process.env.YELP_TOKEN_SECRET
});

let YelpOperations = {
    brewerySearch: function (coordinates, callback) {
        let options = {
            term: "brewery",
            ll: `${coordinates.latitude}, ${coordinates.longitude}`,
            sort: 1,
            category_filter: "breweries"
        };
        console.log("The options: ", options);
        Yelp.search(options, function (error, breweryData) {
            callback(error, breweryData);
        });
    },

    customBrewerySearch: function (location, callback) {
        let options = {
            term: "brewery",
            location: location.address,
            sort: 1,
            category_filter: "breweries"
        };
        Yelp.search(options, function (error, breweryData) {
            callback(error, breweryData);
        });
    }
};

module.exports = YelpOperations;