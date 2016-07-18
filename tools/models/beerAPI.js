"use strict";

let requestNPM = require("request");
let User = require("./user");
let BREWERY_DB = process.env.BREWERY_DB;

let BeerAPI = {

    beerSearch: function (query, callback) {
        requestNPM(`http://api.brewerydb.com/v2/search/?key=${BREWERY_DB}&q=${query}&type=beer&withBreweries=Y`, function (error, response, body) {
            callback(error, body);    
        });
    },

    getDirectories: function (callback) {
        requestNPM(`http://api.brewerydb.com/v2/menu/styles/?key=${BREWERY_DB}`, function (error, response, body) {
            callback(error, body);
        });
    },

    beerMe: function (callback) {
        requestNPM(`http://api.brewerydb.com/v2/beer/random?key=${BREWERY_DB}&withBreweries=Y`, function (error, response, body) {
            callback(error, body);
        });
    },

    singleBeer: function (beerId, callback) {
        requestNPM(`http://api.brewerydb.com/v2/beer/${beerId}/?key=${BREWERY_DB}&withBreweries=Y`, function (error, response, body) {
            callback(error, body);
        });
    },

    beerBrowseMenu: function (callback) {
        requestNPM(`http://api.brewerydb.com/v2/menu/categories/?key=${BREWERY_DB}`, function (error, response, body) {
            callback(error, body);
        });
    },

    getCategoryContents: function (categoryName, pageNumber, callback) {
        requestNPM(`http://api.brewerydb.com/v2/search?q=${categoryName}&type=beer&p=${pageNumber}&key=${BREWERY_DB}&withBreweries=Y`, function (error, response, body) {
            callback(error, body);
        });
    }
};


module.exports = BeerAPI;