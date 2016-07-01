var books = require('../models/products.js').books;
exports.get = function (req, res) {
    var query = req.query;
    console.log(query.price_from+" "+query.price_to+" "+query.year_from+" "+query.year_to);
    books(function (err, data) {
        if (err) return err;
        if (data) {
            data = JSON.parse(data)
        }
        else {
            return "error read data from models"
        }
        res.render('frontpage', {"booksA": data});
    });
};