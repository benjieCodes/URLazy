'use strict'
// integrated modules
var http = require('http');
var path = require('path');

// third-party modules
var express = require('express');

// custom modules
var mappings = require('./data/mappings');
var logger = require('./logger');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('redirector app'));

app.get('/', function (req, res) {
    mappings.list(function (err, documents) {
        res.render('index', {
            mappings: documents
        });
    });
});

app.get('/:alias', function (req, res) {
    mappings.get(req.params.alias, function (err, mapping) {
        if (err) { return res.send(404) }
        res.redirect(mapping)
    });
});

http.createServer(app).listen(3000);