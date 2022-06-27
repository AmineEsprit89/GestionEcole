const mongoose = require("mongoose");

const rdvSchema = new mongoose.Schema({
    Namep: String,
    Emailp:String,
    Date_r:String,
    heure_r:String,
    cause:String
    
    

});

const Rdv = mongoose.model("rdvs", rdvSchema);

module.exports = { Rdv };