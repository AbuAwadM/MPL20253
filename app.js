const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const path = require("path");
const mongoose= require('mongoose');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

const userRouter = require("./routes/user");
const bookstoreRouter = require("./routes/bookstore");
const cartRouter = require("./routes/cart");
const paymentRouter = require("./routes/payment")
const homepageRouter = require("./routes/homepage")

app.use("/",userRouter)
app.use(bookstoreRouter)
app.use(cartRouter)
app.use(paymentRouter)
app.use(homepageRouter)

// express session

mongoose.connect("mongodb://localhost:27017/BookStore202410475").then((r)=>{
    console.log("connected to students database!");
});


app.listen(8080);