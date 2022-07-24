const express = require("express");
const { RdvToxlsx } = require("../controller/xlsx.controller");
const router = express.Router();



router.get("/", RdvToxlsx);

module.exports = router;


