exports.getUser = (req,res) => {
    // res.send("<h1>USER Application (GET method)</h1>")
    res.render("login")
}

exports.postUser = (req,res) => {
    res.send("<h1>USER Application (POST method)</h1>")
}