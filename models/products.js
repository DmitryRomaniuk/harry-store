'use strict';
var fs = require('fs');

exports.books = function () {
    return fs.readFileSync('./models/products.json', 'utf8');
};