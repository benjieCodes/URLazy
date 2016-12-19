'use strict';

// this redirects us to different websites

var data = {
    g: 'http://www.google.com',
    b: 'http://benjie.tech'
};

var mappings = {
    get: function (alias, callback) {
        if (!data[alias]) {
           return callback(new Error('URL not found.'))
        }

        callback(null, data[alias]);
    }
};

module.exports = mappings;


