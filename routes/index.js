const express = require('express');
const router = express.Router();

const cartIndex = require("../controllers/index")

router.get("/index",cartIndex.getHomepage)
router.post("/index",cartIndex.postHomepage)
module.exports = router;