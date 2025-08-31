const express = require('express');
const router = express.Router();

const librarycontroller = require("../controllers/library")

router.get("/library",librarycontroller.getLibrary)
router.post("/library",librarycontroller.postLibrary)
module.exports = router;