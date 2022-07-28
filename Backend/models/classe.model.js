const mongoose = require("mongoose");

const classeSchema= mongoose.Schema(
    {
        ClsID: {
            type: String,
            unique: true
        },
        
        NbrEleves: Number,
        ChefDeClasse: String, // designation
        ListEleves: String // 
    },
);

const Classe = mongoose.model('classe', classeSchema);

module.exports = { Classe }