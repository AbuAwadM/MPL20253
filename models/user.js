const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    fname:String,
    lname:String,
    username:String,
    password:String,
    email:String,
    phone:Number,
    address:String,
    sname:String,
    cart: [{
        bookTitle: String,
        bookPrice: String,
        bookImage: String,
        quantity: { type: Number, default: 1 }
    }]
});
module.exports= mongoose.model("user",userSchema);
