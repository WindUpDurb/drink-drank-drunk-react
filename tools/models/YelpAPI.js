"use strict";

const YelpAPI = require("yelp");

const Yelp = new YelpAPI({
    consumer_key: process.env.YELP_CONSUMER_KEY,
    consumer_secret: process.env.YELP_CONSUMER_SECRET,
    token: process.env.YELP_TOKEN,
    token_secret: process.env.YELP_TOKEN_SECRET
});

let YelpOperations = {
    brewerySearch: function (callback) {
        console.log("Herer")
        Yelp.search({term: "brewery", location: "91780"})
            .then(function(data) {
               console.log("The data: ", data);
            });
    }
};

module.exports = YelpOperations;