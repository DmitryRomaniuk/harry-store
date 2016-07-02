var books = require('../models/products.js').books;
exports.get = function (req, res) {
    var query = req.query;
    query.price_from=parseFloat(query.price_from)||0;
    query.price_to=parseFloat(query.price_to)||2e64;
    query.year_from=parseFloat(query.year_from)||0;
    query.year_to=parseFloat(query.year_to)||2e64;
    books(function (err, data) {
        if (err) return err;
        if (data) {
            data = JSON.parse(data)
        }
        else {
            return "error read data from models"
        }
        res.render('frontpage', {"booksA": data, "sort_by_form": query});
    });
};