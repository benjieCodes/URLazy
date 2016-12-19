'use strict'
// integrated modules
var http = require('http');

// third-party modules
var connect = require('connect');

// custom modules
var mappings = require('./data/mappings'),
    logger = require('./logger')

var app = connect();

app.use(logger('redirector app'));

app.use(function (req, res) {
    mappings.get(req.url, function (err, mapping) {
        var verb = req.method;
        if (err) {
            res.writeHead(404);
            return res.end()
        }

        // returns user to website from the mappings
        res.writeHead(302, {location: mapping });
        res.end();
    });
});

http.createServer(app).listen(3000)