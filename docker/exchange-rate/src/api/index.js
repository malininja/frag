const express = require("express");
const exchangeRateRouter = require("./exchange-rate-module");

const router = new express.Router();

router.use("/exchange-rate", exchangeRateRouter);

module.exports = router;
