'use strict'

var http = require('http');
var mappings = require('./mappings')

var server = http.createServer(function (req, res) {
    var mapping = mappings.get(req.url)
    var verb = req.method;

    if (!mapping) {
        res.writeHead(404);
        res.write('Sorry the alias was not found.' + ' (' + verb + ' REQUEST)')
        return res.end()
    }

    // returns user to website from the mappings
    res.writeHead(302, {location: mapping });
    res.end();
});

server.listen(3000); //sets this to localhost: