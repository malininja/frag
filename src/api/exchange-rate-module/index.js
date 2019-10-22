const express = require("express");
const controller = require("./exchange-rate-controller");

const router = new express.Router();

router.get("", controller.getAll);
router.get("/:id", controller.get);
router.post("", controller.insert);
router.patch("/:id", controller.update);

module.exports = router;
