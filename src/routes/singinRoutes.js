const singinController = require("./../controllers/singinController");

const express = require("express");
const router = express.Router();

router.get("/singin", singinController.singin);

module.exports = router;
