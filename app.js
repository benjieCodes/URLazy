'use strict'

var http = require('http');

var mappings = {
    g: 'http://www.google.com',
    b: 'http://benjie.tech'
};

var server = http.createServer(function (req, res) {
    var alias = req.url.substring(1);

    res.writeHead(302, {
        location: mappings[alias]
    });
    res.end();
});

server.listen(3000);