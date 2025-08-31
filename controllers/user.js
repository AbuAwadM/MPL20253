const user = require("../models/user");


// Show page for Sign up
exports.getUser = (req,res) => {
    res.render("signup")
}

// adding new user to db
exports.postUser = (req,res) => {
    const newcust = new user({
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        sname: req.body.sname
    })

    newcust.save();
    
}

// Showing page for login
exports.getLogin = (req,res) => {
    res.render("login");
}

// checking if user exists
exports.postLogin = (req,res) => {
    

}