"use strict";

const express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
    response.send("Working, yo");
});

router.use("/users", require("./users"));
router.use("/breweryAPI", require("./breweryAPI"));

module.exports = router;