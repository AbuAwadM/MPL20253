exports.getHomepage = (req,res) => {
    res.render("index")
}

exports.postHomepage  = (req,res) => {
    res.send("<h1>Homepage Application (POST method)</h1>")
}