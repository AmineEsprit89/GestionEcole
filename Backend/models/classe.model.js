const mongoose = require("mongoose");

const classeSchema= mongoose.Schema(
    {
        ClsID: {
            type: String,
            unique: true
        },
        
        NbrEleves: Number,
        emailP: String, // email prof => chef de classe
        email: String, // email eleve => liste eleve
        NivCls: String
    },
);

const Classe = mongoose.model('classe', classeSchema);

module.exports = { Classe }