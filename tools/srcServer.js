"use strict";

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    //pass public path defined in public.config
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//single page app, so index will be served for all requests
app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    console.log(err || `Listening on port ${port}`);
});