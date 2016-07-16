"use strict";

const express = require('express');
const router = express.Router();

const YelpAPI = require("../models/YelpAPI");

router.get("/brewerySearch", function (request, response) {
    console.log("here")
    YelpAPI.brewerySearch(function () {

    });
});

module.exports = router;