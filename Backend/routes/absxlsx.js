const express = require("express");
const { AbsToxlsx } = require("../controllers/absxlsx.controller");
const router = express.Router();



router.get("/", AbsToxlsx);

module.exports = router;


