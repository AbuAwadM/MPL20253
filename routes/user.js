const express = require('express');
const router = express.Router();

const usercontroller = require("../controllers/user")

router.get("/",usercontroller.getUser)
router.post("/",usercontroller.postUser)
module.exports = router;