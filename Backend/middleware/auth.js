const req = require('express/lib/request');
const { decode } = require('jsonwebtoken');
const jwt = require ('jsonwebtoken')
require('dotenv').config();

module.exports = (req,res,next)=>{       //this middleware will check if the token is valid so we can acced any crud , protect any route we want (private route)

    try{
        const token = req.headers.authorization;    //token always sent with header (content type)
        const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);           //verify token received from header created with our secret (a user or a non user)
        req.userData = decoded;
        next();
    }catch(error){

        return res.sendStatus(401);
    }  

}