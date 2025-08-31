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
const bookstoreRouter = require("./routes/bookstore")
const cartRouter = require("./routes/cart")
const paymentRouter = require("./routes/payment")
const indexRouter = require("./routes/index")

app.use("/",userRouter)
app.use(bookstoreRouter)
app.use(cartRouter)
app.use(paymentRouter)
app.use(indexRouter)

// express session
// mango db

app.listen(8080);