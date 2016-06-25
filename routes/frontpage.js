var books = require('../models/products.js').books;
exports.get = function (req, res) {
    var books1=books();
    console.log(books1);
    res.render('frontpage', books1);
};