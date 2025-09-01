const user = require("../models/user");

exports.getUser = (req,res) => {
    res.render("signup")
}

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
        .then((savedUser) => {
            req.session.isAuthenticated = true;
            req.session.user = savedUser;
            res.redirect("/bookstore");
        })
        .catch(err => {
            console.log(err);
            res.redirect("/signup");
        });
}

exports.getLogin = (req,res) => {
    res.render("login", {
        PageTitle: 'Login',
        isAuthenticated: req.session.isAuthenticated,
        invalid: false
    });
}

exports.postLogin = (req, res) => {
    user.find({ username: req.body.username, password: req.body.password })
        .then(userData => {
            if (userData.length != 0) {
                req.session.isAuthenticated = true;
                req.session.user = userData[0];
                return res.redirect('/bookstore');
            } else {
                return res.render('login', {
                    PageTitle: 'Login',
                    isAuthenticated: req.session.isAuthenticated,
                    invalid: true
                });
            }
        })
};

exports.postBooksToUserDB = (req, res) => {
    if (!req.session.isAuthenticated || !req.session.user) {
        return res.redirect('/login');
    }

    const { title, price, image } = req.body;
    
    user.findById(req.session.user._id)
        .then(userData => {
            if (!userData) {
                return res.redirect('/login');
            }

            const existingBookIndex = userData.cart.findIndex(item => item.bookTitle === title);
            
            if (existingBookIndex > -1) {
                userData.cart[existingBookIndex].quantity += 1;
            } else {
                userData.cart.push({
                    bookTitle: title,
                    bookPrice: price,
                    bookImage: image,
                    quantity: 1
                });
            }

            return userData.save();
        })
        .then(savedUser => {
            req.session.user = savedUser;
            res.redirect('/bookstore');
        })
        .catch(err => {
            console.log(err);
            res.redirect('/bookstore');
        });
};