const mongoose = require("mongoose");

const niveauSchema= mongoose.Schema(
    {
        NvID: {
            type: String,
            unique: true
        },
        
        ProfResp: String,
        ListeFiliere: String,
        
    },
);

const Niveau = mongoose.model('niveau', niveauSchema);

module.exports = { Niveau }