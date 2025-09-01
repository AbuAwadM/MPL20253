const users = require("../models/user");

exports.getCart = (req,res) => {
    if (req.session.isAuthenticated) {
        res.render("cart", {user: req.session.user, isAuthenticated: req.session.isAuthenticated});
    } else {
        res.redirect("/login");
    }
}

exports.postCart  = (req,res) => {
    res.send("<h1>CART Application (POST method)</h1>")
}

exports.removeFromCart = (req, res) => {

    const bookTitle = req.body.bookTitle;

    users.findByIdAndUpdate(
        req.session.user._id,
        { $pull: { cart: { bookTitle: bookTitle } } }, // remove all quantuties
        { new: true }
    )
        .then(updatedUser => {
            req.session.user = updatedUser;
            res.redirect('/cart');
        })
        .catch(err => {
            console.log(err);
            res.redirect('/cart');
        });
}