var express = require('express');
var router = express.Router();
const userController = require("../controller/users.controller");
const checkAuth = require("../middleware/auth");


/**
 * @Path /users
*/


  router.route('/create').post(userController.createNewUser); 
  router.get('/', userController.getAllusers); 
  router.get('/eleve', userController.findAllEleve); 
  router.get('/professeur', userController.findAllProfesseur); 
  router.get('/:id',userController.getUserById);
  router.post("/update/:id" , userController.updateUser ); 
  router.get("/delete/:id",userController.deleteUser);
  router.post("/login",userController.loginUser);
  router.get("/confirmation/:link",userController.confirmationLink);

  module.exports = router;