"use strict";

let express = require("express");
let router = express.Router();

let BeerAPI = require("../models/beerAPI");
let User = require("../models/user");


router.get("/beerMe", function (request, response) {
    BeerAPI.beerMe(function (error, body) {
        if (error) response.status(400).send(error);
        response.send(body);
    });
});

router.get("/beerDirectories", function (request, response) {
    BeerAPI.getDirectories(function (error, body) {
        if (error) response.send(400).send(error);
        response.send(body);
    });
});


router.get("/beerSearch/:query", function (request, response) {
   BeerAPI.beerSearch(request.params.query, function (error, data) {
       if (error) response.status(400).send(error);
       response.send(data);
   });
});


router.get("/beerBrowseMenu", function (request, response) {
   BeerAPI.beerBrowseMenu(function (error, browseMenuData) {
       if (error) response.status(400).send(error);
       response.send(browseMenuData);
   });
});

router.get("/beerMeSingle/:beerId", function (request, response) {
    let beerId = request.params.beerId;
    BeerAPI.singleBeer(beerId, function (error, beerData) {
        if (error) response.status(400).send(error);
        response.send(beerData);
    });
});

router.put("/updateHasConsumed", function (request, response) {
    User.updateConsumedBeer(request.body, function (error, databaseUser) {
        if (error) response.status(400).send(error);
        response.send(databaseUser);
    });
});

router.get("/beerCategoryContents/:category/:pageNumber", function (request, response) {
    let categoryName = request.params.category;
    let pageNumber = request.params.pageNumber;
    BeerAPI.getCategoryContents(categoryName, pageNumber, function (error, contents) {
        if (error) response.status(400).send(error);
        response.send(contents);
    });
});

module.exports = router;
