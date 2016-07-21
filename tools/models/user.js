"use strict";

let mongoose = require("mongoose");
let bcrypt = require("bcrypt");
let jwt = require("json-web-token");
let moment = require("moment");

let JWT_SECRET = process.env.JWT_SECRET;

//Prior Schema
/*let userSchema = new mongoose.Schema({

    email: { type: String, required: true },
    firstName: { type: String },
    lastName: {type: String },
    password: { type: String, required: true },
    //for to Drink and sampled beers, consider storing in an object,
    //and using Object.assign() to replace it with modifications;
    //Quicker look-up, quicker modifications
    toDrink: [{
        beerName: { type: String },
        beerId: { type: String },
        image: { type: String },
        breweryName: { type: String },
        //maybe include later a notes section that the user
        //can fill with notes on where to get the beer, who introduced it to him, etc.
        //it'll be an array of objects
        finallyDrank: { type: Boolean, default: false }
    }],
    sampledBeers: [{
        beerName: { type: String },
        beerId: { type: String },
        beerImage: { type: String },
        breweryName: { type: String },
        comments: [{ type: String }],
        beerRating: { type: Number, default: 0 },
        beerMemories: [{
            beerPhotoCaption: { type: String },
            beerPhotoUrl: { type: String }
        }]
    }]
});*/

let userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    //for to Drink and sampled beers, consider storing in an object,
    //and using Object.assign() to replace it with modifications;
    //Quicker look-up, quicker modifications
    toDrink: [{
        beerName: { type: String },
        beerId: { type: String },
        image: { type: String },
        breweryName: { type: String },
        //maybe include later a notes section that the user
        //can fill with notes on where to get the beer, who introduced it to him, etc.
        //it'll be an array of objects
        finallyDrank: { type: Boolean, default: false }
    }],
    sampledBeers: [{
        beerName: { type: String },
        beerId: { type: String },
        beerImage: { type: String },
        breweryName: { type: String },
        comments: [{ type: String }],
        beerRating: { type: Number, default: 0 },
        beerMemories: [{
            beerPhotoCaption: { type: String },
            beerPhotoUrl: { type: String }
        }]
    }]
});


userSchema.statics.addToToDrink = function (toUpdateWith, callback) {
    User.findById(toUpdateWith._id, function (error, databaseUser) {
        if (error || !databaseUser) return callback(error || { error: "There is no user" });
        databaseUser.toDrink.push(toUpdateWith.beerData);
        databaseUser.save(function (error, savedUser) {
            callback(error, savedUser);
        });
    });
};

userSchema.statics.saveBeerRating = function (dataToSave, callback) {
    User.findById(dataToSave._id, function (error, databaseUser) {
        if (error || !databaseUser) return callback(error || { error: "There is no user" }); 
        for (let i = 0; i < databaseUser.sampledBeers.length; i++) {
            if (dataToSave.beerId === databaseUser.sampledBeers[i].beerId) {
                databaseUser.sampledBeers[i].beerRating = dataToSave.newBeerRating;
            }
        }
        databaseUser.save(function (error, savedUser) {
            callback(error, savedUser);
        });
    });  
};

userSchema.statics.addBeerMemory = function (beerMemory, callback) {
    User.findById(beerMemory._id, function (error, databaseUser) {
        if (error || !databaseUser) return callback(error || { error: "There is no user." });
        let beerMemoryObject = {
            beerPhotoUrl: beerMemory.imageUrl
        };
        for (let i = 0; i < databaseUser.sampledBeers.length; i++) {
            if (databaseUser.sampledBeers[i].beerId === beerMemory.beerId) {
                databaseUser.sampledBeers[i].beerMemories.push(beerMemoryObject);
                databaseUser.save(function (error, savedUser) {
                    return callback(error, savedUser);
                });
            }
        }
    });
};


userSchema.statics.obtainUsers = function (callback) {
    User.find({}, function (error, userList) {
        if (error || !userList) return callback(error || { error: "There are no users" });
        return callback(null, userList);
    });
};


// userSchema.statics.registerNewUser = function (newUserData, callback) {
//     User.findOne({ email: newUserData.email }, function (error, databaseUser) {
//         if (error || databaseUser) return callback(error || {error: "The email is already registered to a user."});
//         bcrypt.hash(newUserData.password, 12, function (error, hash) {
//             if (error) return callback(error);
//             newUserData.password = hash;
//             User.create(newUserData, function (error, savedUser) {
//                 if (savedUser) savedUser.password = null;
//                 return callback(error, savedUser);
//             });
//         });
//     });
// };


userSchema.statics.deleteUserAccount = function (userId, callback) {
    User.findByIdAndRemove(userId, function (error) {
        callback(error);
    });
};


userSchema.statics.updateToDrink = function (beerId, consumed, additionalDataToSave, callback) {
    if (additionalDataToSave) {
        // let currentBeer = additionalDataToSave.nonBeerMeBeer || additionalDataToSave.beerModifying;
        for (let i = 0; i < additionalDataToSave.toDrink.length; i++) {
            if (additionalDataToSave.toDrink[i].beerId === beerId) {
                additionalDataToSave.toDrink[i].finallyDrank = consumed;
                return additionalDataToSave;
            }
        }
        return additionalDataToSave;
    } else if (!additionalDataToSave) {
        User.findById(beerId, function (error, databaseUser) {
            if (error || !databaseUser) return callback(error || {error: "There is no user"});
            for (let i = 0; i < databaseUser.toDrink.length; i++) {
                if (databaseUser.toDrink[i].beerId === beerId) {
                    databaseUser.toDrink[i].finallyDrank = consumed;
                    return callback(null, databaseUser);
                }
            }
        });
    }
};

userSchema.statics.updateConsumedBeer = function (toUpdateWith, callback) {
    User.findById(toUpdateWith._id, function (error, databaseUser) {
        if (error || !databaseUser) return callback(error || { error: "There is no such user." });
        let currentBeerId;
        let currentBeerConsumed;
        if (toUpdateWith.beerData.consumed) {
            databaseUser.sampledBeers.push(toUpdateWith.beerData);
        } else {

            for (let i = 0; i < databaseUser.sampledBeers.length; i++) {
                if (databaseUser.sampledBeers[i].beerId === toUpdateWith.beerData.beerId) {
                    databaseUser.sampledBeers.splice(i, 1);
                    break;
                }
            }
        }
        currentBeerId = toUpdateWith.beerData.beerId;
        currentBeerConsumed = toUpdateWith.beerData.consumed;
      
        databaseUser = User.updateToDrink(currentBeerId, currentBeerConsumed, databaseUser, null);
        databaseUser.save(function (error, savedUser) {
            savedUser.password = null;
            callback(error, savedUser);
        });
    });
};

userSchema.statics.updateUserAccount = function (updatedUserData, callback) {
    User.findById(updatedUserData._id, function (error, databaseUser) {
        if (error || !databaseUser) return callback(error || { error : "There is no user with that information." });
        bcrypt.compare(updatedUserData.password, databaseUser.password, function (error, isGood) {
            if (error || !isGood) return callback(error || { error: "Authentication failed." });
            databaseUser = updatedUserData;
            databaseUser.save(function (error, savedUser) {
                callback(error, savedUser);
            });
        });
    });
};


userSchema.methods.generateToken = function () {
    let payload = {
        _id: this._id,
        exp: moment().add(7, "day").unix()
    };
    return jwt.encode(JWT_SECRET, payload, function (error, token) {
        console.log("Error: ", error);
        console.log("Token: ", token);
        return error || token;
    });
};

//Version 1 authenticate
// userSchema.statics.authenticate = function (loginData, callback) {
//     User.findOne({ email : loginData.email }, function (error, databaseUser) {
//         if (error || !databaseUser) return callback(error || { error: "Authentication failed."});
//         bcrypt.compare(loginData.password, databaseUser.password, function (error, isGood) {
//             if (error || !isGood) return callback(error || { error: "Authentication Failed." });
//             let token = databaseUser.generateToken();
//             databaseUser.password = null;
//             callback(null, token, databaseUser);
//         });
//     });
// };

userSchema.statics.authenticate = function (loginData, callback) {
    User.findOne({ email : loginData.email }, function (error, databaseUser) {
        if (error) return callback(error);
        if(!databaseUser) {
            User.create({email: loginData.email}, function (error, savedUser) {
                return callback(error, savedUser);
            });
        } else {
            return callback(null, databaseUser);
        }
    });
};

userSchema.statics.authorization = function () {
    return function (request, response, next) {
        let token = request.cookies.accessToken;
        jwt.decode(JWT_SECRET, token, function (error, payload) {
            if (error) return response.status(401).send({ error: "Authentication failed." });
            User.findById(payload._id, function (error, user) {
                if (error) return response.status(401).send({ error : "User not found." });
                user.password = null;
                request.user = user;
                next();
            });
        });
    };
};



let User = mongoose.model("User", userSchema);


module.exports = User;