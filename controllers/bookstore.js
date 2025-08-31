exports.getBookstore = (req,res) => {
    res.render("bookstore")
}

exports.postBookstore = (req,res) => {
    res.send("<h1>LIBRARY Application (POST method)</h1>")
}