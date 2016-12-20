'use strict'
// integrated modules
var http = require('http');
var path = require('path');

// third-party modules
var express = require('express');
var socket = require('socket.io');

// custom modules
var mappings = require('./data/mappings');
var logger = require('./logger');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('redirector app'));

app.get('/', function (req, res) {
    res.render('index', {
        mappings: documents
    });
});

app.get('/:alias', function (req, res) {
    mappings.get(req.params.alias, function (err, mapping) {
        if (err) { return res.send(404) }
        res.redirect(mapping)
    });
});



var server = http.createServer(app);
server.listen(3000);

var io = socket.listen(server);

io.sockets.on('connection', function (socket) {
    mappings.list(function (err, documents) {
        socket.emit('list', documents);
    });
});