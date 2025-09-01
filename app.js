const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const path = require("path");
const mongoose= require('mongoose');

mongoose.connect("mongodb://localhost:27017/BookStore202410475").then((r)=>{
    console.log("connected to students database!");
});

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

const userRouter = require("./routes/user");
const bookstoreRouter = require("./routes/bookstore");
const cartRouter = require("./routes/cart");
const paymentRouter = require("./routes/payment")
const homepageRouter = require("./routes/homepage")

const expressSession=require('express-session');
const MongoDBSession=require('connect-mongodb-session')(expressSession);
const mdbsession = MongoDBSession({uri:"mongodb://localhost:27017/BookStore202410475",collection:'sessions' });
app.use(expressSession({secret:'awad',resave:false,saveUninitialized:false,store:mdbsession}));

app.use("/",userRouter)
app.use(bookstoreRouter)
app.use(cartRouter)
app.use(paymentRouter)
app.use(homepageRouter)




app.listen(8080);