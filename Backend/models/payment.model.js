const mongoose = require("mongoose");

const paymentSchema= mongoose.Schema(
    {   email : String,
        montantPaye : Number,
        description : String,
        userId :String
    },{timestamps : true}
);
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = { Payment }