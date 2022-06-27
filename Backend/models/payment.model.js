const mongoose = require("mongoose");

const paymentSchema= mongoose.Schema(
    {
        datePaiement : String,
        montantApayer : Number,
        moyenDePaiment : String,
        montantPaye : Number,
        montantRestantDue : Number,
    }
);

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment }