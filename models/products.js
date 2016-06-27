'use strict';
var fs = require('fs');

module.exports.books = function (callback) {
    return fs.readFile('./models/products.json', 'utf8', function (err, data) {callback(err, data)});
};