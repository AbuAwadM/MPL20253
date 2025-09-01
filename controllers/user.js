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
    newcust.save()
        .then(() => {
            res.redirect("/bookstore");
        })
        .catch(err => {
            console.log(err);
            res.redirect("/signup");
        });
}

// Showing page for login
exports.getLogin = (req,res) => {
    res.render("login", {
        PageTitle: 'Login',
        isAuthenticated: req.session.isAuthenticated,
        invalid: false
    });
}

exports.postLogin = (req, res, next) => {
    user.find({ username: req.body.username, password: req.body.password })
        .then(userData => {
            if (userData.length != 0) {
                req.session.isAuthenticated = true;
                return res.redirect('/bookstore');
            } else {
                return res.render('login', {
                    PageTitle: 'Login',
                    isAuthenticated: req.session.isAuthenticated,
                    invalid: true
                });
            }
        })
        .catch(err => {
            console.log(err);
            return res.render('login', {
                PageTitle: 'Login',
                isAuthenticated: req.session.isAuthenticated,
                invalid: true
            });
        });
};