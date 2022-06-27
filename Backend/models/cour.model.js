const mongoose = require("mongoose");

const courSchema = new mongoose.Schema({
    Designation : String,
    nomEnseignant: String,
    chapitre:String,
    imageUrl:String,
    
    
    

});

const Cour = mongoose.model("cours", courSchema);

module.exports = { Cour };