exports.getHomepage = (req,res) => {
    res.render("homepage")
}

exports.postHomepage  = (req,res) => {
    res.send("<h1>Homepage Application (POST method)</h1>")
}