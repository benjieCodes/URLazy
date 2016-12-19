'use strict';

// this redirects us to different websites

var data = {
    g: 'http://www.google.com',
    b: 'http://benjie.tech'
};

var mappings = {
    get: function (url, callback) {
        var alias = url.substring(1)

        if (!data[alias]) {
            callback(new Error('URL not found.'))
            return;
        }

        callback(null, data[alias]);
    }
};

module.exports = mappings;


