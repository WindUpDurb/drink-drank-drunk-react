"use strict";

const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/breweryAPI", require("./breweryAPI"));
router.use("/yelpAPI", require("./yelpAPI"));

module.exports = router;