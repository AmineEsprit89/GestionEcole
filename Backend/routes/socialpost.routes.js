var express = require('express');
var router = express.Router();
const {ShareTosocialMedia}= require("../controller/socialpost.controller")

router.get('/:id',ShareTosocialMedia);
    
    
    module.exports = router;
