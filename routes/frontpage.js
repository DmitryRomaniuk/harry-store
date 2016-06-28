var books = require('../models/products.js').books;
exports.get = function (req, res) {
    books(function (err, data) {
        if (err) return err;
        data=JSON.parse(data);
        res.render('frontpage', {"booksA":data});
    });
};