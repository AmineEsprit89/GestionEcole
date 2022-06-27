const mongoose = require("mongoose");

const reclamationSchema= mongoose.Schema(
    {
        objet : String,
        contenu : String,
        priorite : String,

    }
);

const Reclamation = mongoose.model('Reclamation', reclamationSchema);
module.exports = { Reclamation }