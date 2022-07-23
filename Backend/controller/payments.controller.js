const { Payment } = require("../models/payment.model");
const stripe = require("stripe")(process.env.SECRET_KEY);
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  /*
    create payment deleted because payments are added automatically from stripe payments
  */

  //get all  
  getAllpayments: async (req, res) => {
    const payments = await Payment.find();
    res.json(payments);
  },

  //getById
  getpaymentById: async (req, res) => {
    console.log("access");
    const { id } = req.params;
    const payment = await Payment.findById(id);
    res.json(payment);
  },
  
  //update
  updatePayment: async (req, res) => {
    const payment = await Payment.findById(req.params.id);
    console.log(req.body);
    payment.email = req.body.email;
    payment.nom = req.body.nom;
    payment.montantPaye = req.body.montantPaye;
    await payment.save();
    res.json({ msg: "payment updated" });
  },

  //delete
  deletePayment: async (req, res) => {
    const payment = await Payment.findById(req.params.id);
    await payment.remove();
    res.json({ msg: "payment deleted" });
  },

  //Auto add from stripe
  showPayment: async (req, res) => {
    //decoding token to send info for payment details
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZW9ucHBwcHJpdC50biIsInVzZXJJZCI6IjYyZGFlOWMwOTIyY2E1ODg3YWQ3NTg2NSIsImFjY291bnRUeXBlIjoiYWRtaW4iLCJub20iOiJIYW1kaSIsInByZW5vbSI6Ik1vaGFtZWQgQW1pbmUiLCJpYXQiOjE2NTg1NjY3MTQsImV4cCI6MTY1ODU3MDMxNH0.IDaD4Dxeey3vTwYY3xXDSNW3YKGm4cJ--KpGrMvHpM4";
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    res.render("payment", {
      key: process.env.PUBLISHABLE_KEY,
      email: decoded.email,
      amount: "620000",
      currency: "usd",
      description: "Annee scolaire 2022-2023",
      nom: decoded.nom,
    });
  },
  payment: async (req, res) => {
    //decoding token
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9uZW9ucHBwcHJpdC50biIsInVzZXJJZCI6IjYyZGFlOWMwOTIyY2E1ODg3YWQ3NTg2NSIsImFjY291bnRUeXBlIjoiYWRtaW4iLCJub20iOiJIYW1kaSIsInByZW5vbSI6Ik1vaGFtZWQgQW1pbmUiLCJpYXQiOjE2NTg1NjY3MTQsImV4cCI6MTY1ODU3MDMxNH0.IDaD4Dxeey3vTwYY3xXDSNW3YKGm4cJ--KpGrMvHpM4";
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    //create customer (data quand on click détails paiment)
    stripe.customers
      .create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
        name: decoded.nom,
      })
      //customer info for stripe dhashboard (tous les paiments) and receipt token
      .then((customer) => {
        return stripe.charges.create({
          amount: 620000,
          description: "Annee scolaire 2022-2023",
          currency: "USD",
          customer: customer.id,
        });
      })
      //recuperer les données charge object
      .then((charge) => {
        //  console.log(charge);
        res.send("Success");
        const payment = new Payment({
          email: decoded.email,
          nom: decoded.nom,
          montantPaye: charge.amount / 100,
          userId: decoded.userId,
        });
        payment.save();
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
