'use strict'
// integrated modules
var http = require('http');

// third-party modules
var express = require('express');

// custom modules
var mappings = require('./data/mappings');
var logger = require('./logger');

var app = express();

app.use(logger('redirector app'));

app.get('/', function (req, res) {
    res.send({
        foo: 'bar',
        baz: 23
    });
});

app.get('/:alias', function (req, res) {
    mappings.get(req.params.alias, function (err, mapping) {
        if (err) { res.send(404) }

        // returns user to website from the mappings
        res.redirect(mapping)
    });
});


http.createServer(app).listen(3000)