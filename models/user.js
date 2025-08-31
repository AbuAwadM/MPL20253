const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    fname:String,
    lname:String,
    username:String,
    password:Number,
    email:String,
    phone:Number,
    address:String,
    sname:String,
});
module.exports= mongoose.model("user",userSchema);
