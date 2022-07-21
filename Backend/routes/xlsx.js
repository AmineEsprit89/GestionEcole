const express = require("express");
const { RdvToxlsx } = require("../controllers/xlsx.controller");
const router = express.Router();



router.get("/", RdvToxlsx);

module.exports = router;


