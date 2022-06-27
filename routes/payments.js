var express = require('express');
var router = express.Router();
const paymentsController = require("../controller/payments.controller");



  /**
 * @Path /payments
*/

router.route('/create').post(paymentsController.createNewPayment);
router.get('/', paymentsController.getAllpayments); 
router.get('/:id',paymentsController.getpaymentById);
router.post("/update/:id" , paymentsController.updatePayment);
router.get("/delete/:id",paymentsController.deletePayment);

module.exports = router;