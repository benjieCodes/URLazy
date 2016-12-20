'use strict';

var path = require('path');

var Datastore = require('nedb');

var db = {
    mappings: new Datastore({ filename: path.join(__dirname, 'mappings.db'), autoload: true })
};

db.mappings.insert({ alias: 'g', url: 'http://www.google.com'}, function (err, insertedDocument) {
    //...
});

var mappings = {
    get: function (alias, callback) {
        db.mappings.findOne({ alias: alias}, function (err, mapping) {
            if (err || !mapping) { return callback(new Error('Alias not found.')); }
        callback(null, mapping.url);
        });
    }
};

module.exports = mappings;


