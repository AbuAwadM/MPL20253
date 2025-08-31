const express = require('express');
const router = express.Router();

const paymentcontroller = require("../controllers/payment")

router.get("/payment",paymentcontroller.getPayment)
router.post("/payment",paymentcontroller.postPayment)
module.exports = router;