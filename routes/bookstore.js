const express = require('express');
const router = express.Router();

const bookstorecontroller = require("../controllers/bookstore")

router.get("/bookstore",bookstorecontroller.getBookstore)
router.post("/bookstore",bookstorecontroller.postBookstore)
module.exports = router;