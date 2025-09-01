const booksjson = require("../models/books");

exports.getBookstore = (req,res) => {
    res.render("bookstore", { booksjson: booksjson })
}

exports.postBookstore = (req,res) => {
    res.send("<h1>LIBRARY Application (POST method)</h1>")
}
