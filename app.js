'use strict'

var http = require('http');

// this redirects us to different websites
var mappings = {
    g: 'http://www.google.com',
    b: 'http://benjie.tech'
};

var server = http.createServer(function (req, res) {
    var alias = req.url.substring(1);

    // returns a 404 not found if no alias is found
    if (!mappings[alias]) {
        res.writeHead(404)
        return res.end()
    }
    res.writeHead(302, {
        location: mappings[alias]
    });
    res.end();
});

server.listen(3000); //sets this to localhost: