const mongoose = require("mongoose");

const EleveSchema= mongoose.Schema(
 {
    NomEleve: String,
    PrenomEleve: String,
    SexeEleve: String,
    EmailEleve: String,
    AdresseEleve: String,
    DateNaissance: String
    

    },
);

const Eleve = mongoose.model('eleve', EleveSchema);

module.exports = { Eleve }