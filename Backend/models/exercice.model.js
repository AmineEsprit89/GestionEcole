const mongoose = require("mongoose");

const exerciceSchema = new mongoose.Schema({
    Designation : String,
    nomEnseignant: String,
    Date_event:String,
    chapitre:String,
    imageUrl:String,
    
    
    

});

const Exercice = mongoose.model("exercices", exerciceSchema);

module.exports = { Exercice };