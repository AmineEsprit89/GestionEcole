const express = require("express");
const { AbsToxlsx } = require("../controller/absxlsx.controller");
const router = express.Router();



router.get("/", AbsToxlsx);

module.exports = router;


