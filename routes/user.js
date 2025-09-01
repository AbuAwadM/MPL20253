const express = require('express');
const router = express.Router();

const usercontroller = require("../controllers/user")

router.get("/signup",usercontroller.getUser)
router.post("/signup",usercontroller.postUser)

router.get("/login",usercontroller.getLogin)
router.post("/login",usercontroller.postLogin)

module.exports = router;