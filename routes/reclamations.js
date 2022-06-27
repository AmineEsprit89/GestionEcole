var express = require('express');
var router = express.Router();
const reclamationsController = require("../controller/reclamations.controller");



  /**
 * @Path /reclamations
*/

router.route('/create').post(reclamationsController.createNewReclamation);
router.get('/', reclamationsController.getAllreclations); 
router.get('/:id',reclamationsController.getreclamationtById);
router.post("/update/:id" , reclamationsController.updateReclamation);
router.get("/delete/:id",reclamationsController.deleteReclamation);

module.exports = router;