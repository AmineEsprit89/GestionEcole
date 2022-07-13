var express = require('express');
var router = express.Router();
const userController = require("../controller/users.controller");
const checkAuth = require("../middleware/auth");


/**
 * @Path /users
*/


  router.route('/create').post(userController.createNewUser); 
  router.get('/',checkAuth, userController.getAllusers); 
  router.get('/:id',checkAuth,userController.getUserById);
  router.post("/update/:id",checkAuth , userController.updateUser ); 
  router.get("/delete/:id",checkAuth,userController.deleteUser);
  router.post("/login",userController.loginUser);
  router.get("/confirmation/:link",userController.confirmationLink);

  module.exports = router;