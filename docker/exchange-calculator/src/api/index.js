const express = require("express");
const exchangeCalculatorRouter = require("./exchange-calculator-module");

const router = new express.Router();

router.use("/exchange-calculator", exchangeCalculatorRouter);

module.exports = router;
