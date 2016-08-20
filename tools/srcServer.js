"use strict";
require("dotenv").load();


import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();
const MONGOURL = process.env.MONGODB_URI || "mongodb://localhost/brewery-app-react";
const compiler = webpack(config);
// const pathToStatic = path.join(__dirname);
/* eslint-disable no-console */
const lex = require('letsencrypt-express').create({
    // set to https://acme-v01.api.letsencrypt.org/directory in production
    server: 'staging',
    challenges: { 'http-01': require('le-challenge-fs').create({ webrootPath: '/tmp/acme-challenges' }) },
    store: require('le-store-certbot').create({ webrootPath: '/tmp/acme-challenges' })
    , approveDomains: approveDomains
});

require('http').createServer(lex.middleware(require('redirect-https')())).listen(3440, function () {
    console.log("Listening for ACME http-01 challenges on", this.address());
});


mongoose.connect(MONGOURL, function (error) {
    console.log(error || `Connected to MongoDB at ${MONGOURL}`);
});


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));


app.use(express.static(__dirname));



app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    //pass public path defined in public.config
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use("/api", require("./routes/api"));

app.use("*", require("./routes/index"));


/*app.listen(PORT, function(err) {
    console.log(err || `Listening on port ${PORT}`);
});*/

require('https').createServer(lex.httpsOptions, lex.middleware(app)).listen(3550, function () {
    console.log("Listening for ACME tls-sni-01 challenges and serve app on", this.address());
});

function approveDomains(opts, certs, cb) {
    // This is where you check your database and associated
    // email addresses with domains and agreements and such


    // The domains being approved for the first time are listed in opts.domains
    // Certs being renewed are listed in certs.altnames
    if (certs) {
        opts.domains = certs.altnames;
    }
    else {
        opts.email = 'durbina1991@gmail.com';
        opts.agreeTos = true;
        opts.domains = ["drinkdrankdrunk.tech"];
    }

    cb(null, { options: opts, certs: certs });
}