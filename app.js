const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const path = require("path");
const mongoose= require('mongoose');

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

const userRouter = require("./routes/user")
const libraryRouter = require("./routes/library")
const cartRouter = require("./routes/cart")
const paymentRouter = require("./routes/payment")

app.use("/",userRouter)
app.use(libraryRouter)
app.use(cartRouter)
app.use(paymentRouter)

// express session
// mango db

app.listen(8080);