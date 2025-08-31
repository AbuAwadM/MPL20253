const express = require('express');
const router = express.Router();

const cartHomepage= require("../controllers/homepage")

router.get("/",cartHomepage.getHomepage)
router.post("/",cartHomepage.postHomepage)
module.exports = router;