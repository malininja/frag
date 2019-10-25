const express = require("express");
const exchangeCalculatorRouter = require("./exchange-calculator-module");
const exchangeRateRouter = require("./exchange-rate-module");

const router = new express.Router();

router.use("/exchange-calculator", exchangeCalculatorRouter);
router.use("/exchange-rate", exchangeRateRouter);

module.exports = router;
