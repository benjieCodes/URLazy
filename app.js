'use strict'

var http = require('http');
var mappings = require('./mappings')

var server = http.createServer(function (req, res) {
    var alias = req.url.substring(1);
    var verb = req.method;

    if (!mappings[alias]) {
        res.writeHead(404)
        res.write('Sorry the alias: ' + alias + ' was not found.' + ' (' + verb + ' REQUEST)')
        return res.end()
    }

    // returns user to website from the mappings
    res.writeHead(302, {
        location: mappings[alias]
    });
    res.end();
});

server.listen(3000); //sets this to localhost: