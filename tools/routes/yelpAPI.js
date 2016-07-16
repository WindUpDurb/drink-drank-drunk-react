"use strict";

const express = require('express');
const router = express.Router();

const YelpAPI = require("../models/YelpAPI");

router.post("/nearbyBreweries", function (request, response) {

    YelpAPI.brewerySearch(request.body, function (error, breweryData) {
        if (error) response.status(400).send(error);
        response.send(breweryData);
    });
});

module.exports = router;