const mongoose = require("mongoose");

const professeurSchema= mongoose.Schema(
    {
        ProfID: {
            type: String,
            unique: true
        },

        NomProf: String,
        PrenomProf: String,
        AgeProf: Number,
        EmailProf: String,
        AdresseProf: String,
        Specialite: String
    },
);

const Professeur = mongoose.model('professeur', professeurSchema);

module.exports = { Professeur }