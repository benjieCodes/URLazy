'use strict'

var http = require('http');
var mappings = require('./data/mappings')

var server = http.createServer(function (req, res) {
    mappings.get(req.url, function (err, mapping) {
    var verb = req.method;
    if (err) {
        res.writeHead(404);
        res.write('Sorry the alias was not found.' + ' (' + verb + ' REQUEST)')
        return res.end()
    }

    // returns user to website from the mappings
    res.writeHead(302, {location: mapping });
    res.end();
    })
});

server.listen(3000); //sets this to localhost: