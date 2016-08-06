"use strict";

const express = require("express");
const router = express.Router();
const multer = require("multer");
const async = require("async");

const BeerDiscussion = require("../models/BeerDiscussions");
const BeerRatings = require('../models/BeerRatings');
const User = require("../models/user");
const S3 = require("../models/s3-storage");

const upload = multer({storage: multer.memoryStorage()});


router.route("/")
    .get(function (request, response) {
        User.obtainUsers(function (error, registeredUserList) {
            if (error) response.status(400).send(error);
            response.send(registeredUserList);
        });
    })
    .post(function (request, response) {
        let newUserData = request.body;
        User.registerNewUser(newUserData, function (error, createdUser) {
            if (error) response.status(400).send(error);
            response.send(createdUser);
        });
    })
    .put(function (request, response) {
        let userToUpdate = request.body;
        User.updateUserAccount(userToUpdate, function (error, updatedUser) {
            if (error) response.status(400).send(error);
            response.send(updatedUser);
        });
    });

router.post("/addToSampled", function (request, response) {
    let userId = request.body._id;
    let beerToAdd = request.body.beerToAdd;
    User.addToSampledBeers(userId, beerToAdd, function (error, savedUser) {
        if (error) response.status(400).send(error);
        response.send(savedUser);
    });
});

router.get("/supplementalBeerData/:beerId", function (request, response) {
    let beerId = request.params.beerId;
    async.parallel([
        function(callback) {
            BeerDiscussion.fetchBeerData(beerId, function (error, supplementalData) {
                callback(error, supplementalData);
            });
        },
        function(callback) {
            BeerRatings.getRating(beerId, function (error, rating) {
                callback(error, rating);
            });
        }
    ], function (error, results) {
        if (error) return response.status(400).send(error);
        response.send(results);
    });
});

router.delete("/deleteUser/:userId", function (request, response) {
    User.deleteUserAccount(request.params.userId, function (error) {
        if (error) response.status(400).send(error);
        response.send("The user has been deleted");
    });
});

router.post("/login", function (request, response) {
    User.authenticate(request.body, function (error, userData) {
        if (error) {
            response.status(400).send(error);
        } else {
            response.send(userData);
        }
    });
});

router.post("/addToToDrink", function (request, response) {
   User.addToToDrink(request.body, function (error, savedUser) {
       if (error) return response.status(400).send(error);
       response.send(savedUser);
   });
});

router.post("/addBeerComment", function (request, response) {
    BeerDiscussion.addCommentToDiscussion(request.body, function (error, updatedDiscussion) {
        console.log("Error: ", error);
        console.log("Updated Discussion: ", updatedDiscussion);
       if (error) return response.status(400).send(error);
        response.send(updatedDiscussion);
    });
});

router.post("/saveBeerRating", function (request, response) {
    User.saveBeerRating(request.body, function (error, updatedUser) {
        if (error) return response.status(400).send(error);
        let sampledBeers = request.body.sampledBeers;
        //clean this up
        let previousRating;
        for (let i = 0; i < sampledBeers.length; i++) {
            if (sampledBeers[i].beerId === request.body.beerId && sampledBeers[i].beerRating > 0) {
                previousRating = sampledBeers[i].beerRating;
            }
        }
        let argument = {
            beerId: request.body.beerId,
            rating:request.body.newBeerRating,
            previousRating
        };
        BeerRatings.updateRating(argument, function (error, updatedBeerData) {
            if (error) response.status(400).send(error);
            response.send({updatedUser, updatedBeerData});
        });
    });
});

router.post("/uploadPhoto/:userId/:beerId", upload.single("newBeerPhoto"), function (request, response, next) {
    S3.upload(request.file, function (error, returnData) {
        if (error) response.status(400).send(error);
        let beerMemory = {
            _id: request.params.userId,
            beerId: request.params.beerId,
            imageUrl: returnData.imageUrl
        };
        User.addBeerMemory(beerMemory, function (error, updatedUser) {
            if (error) response.status(400).send(error);
            response.send();
        });
    });
});

router.get("/activeUser", User.authorization(), function (request, response) {
    let activeUser = request.user;
    response.send(activeUser);
});

router.delete("/logout", function (request, response) {
    response.clearCookie("accessToken").send();
});


router.post("/authenticateMobileUser", function (request, response) {
    User.authenticateMobileUser(request.body.idToken, function (error, userData) {
        if (error) return response.status(400).send(error);
        return response.send(userData);
    })
});


module.exports = router;