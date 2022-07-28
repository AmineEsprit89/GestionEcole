const mongoose = require("mongoose");

const rdvSchema = new mongoose.Schema({
    Namep: String,
    EmailE:String,
    EmailP:String,
    Date_r:String,
    heure_r:String,
    cause:String
    
    

});

const Rdv = mongoose.model("rdvs", rdvSchema);

module.exports = { Rdv };