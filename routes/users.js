var express = require('express');
var router = express.Router();
const userController = require("../controller/users.controller");


  /**
 * @Path /users
*/

//ajouter un nouvel utilisateur
  router.route('/create').post(userController.createNewUser); //ok
  router.get('/', userController.getAllusers); //ok
  router.get('/:id',userController.getUserById);
  router.post("/update/:id" , userController.updateUser ) //ok
  router.get("/delete/:id",userController.deleteUser);

  module.exports = router;