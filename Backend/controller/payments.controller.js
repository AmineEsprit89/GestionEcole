const { Payment } = require("../models/payment.model");

module.exports = {

    createNewPayment: async (req, res) => {         //works!!
        const payment = new Payment({
            datePaiement : req.body.datePaiement,
            montantApayer : req.body.montantApayer,
            moyenDePaiment : req.body.moyenDePaiment,
            montantPaye : req.body.montantPaye,
            montantRestantDue : req.body.montantRestantDue,
        })
        await payment.save();
        console.log(req.body);
        res.json(payment);
    },  

    getAllpayments: async (req, res) => {   //works!!
        const payments = await Payment.find();
        res.json(payments)
    },

    getpaymentById: async (req, res) => {          //works!!
        const { id } = req.params;
        const payment = await Payment.findById(id);
        res.json(payment);
    },

    updatePayment : async (req, res) => {          //works!!
        const payment = await Payment.findById(req.params.id);
        console.log(req.body);
        payment.datePaiement = req.body.datePaiement;
        payment.montantApayer = req.body.montantApayer;
        payment.moyenDePaiment = req.body.moyenDePaiment;
        payment.montantPaye = req.body.montantPaye;
        payment.montantRestantDue = req.body.montantRestantDue;
        await payment.save();
        res.json(payment);
    },

    deletePayment: async (req,res)=>{          //works!!
        const payment = await Payment.findById(req.params.id);
        //const { id } = req.params;
        await payment.remove(/*{ _id: id }*/);
        //res.json(reclamation);
    }


}