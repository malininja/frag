const express = require("express");
const controller = require("./exchange-calculator-controller");

const router = new express.Router();

router.post("", controller.calculate);

module.exports = router;
