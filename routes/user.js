const express = require('express');
const router = express.Router();

const usercontroller = require("../controllers/user")

router.get("/signup",usercontroller.getUser)
router.post("/signup",usercontroller.postUser)

router.get("/login",usercontroller.getLogin)
router.post("/login",usercontroller.postLogin)

router.post("/add",usercontroller.postBooksToUserDB)

module.exports = router;