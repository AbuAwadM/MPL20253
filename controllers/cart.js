const users = require("../models/user");

exports.getCart = (req,res) => {
    users.find().then((usr)=>{
        res.render("cart",{users:usr})
    });
}

exports.postCart  = (req,res) => {
    res.send("<h1>CART Application (POST method)</h1>")
}