const mongoose = require("mongoose");

const absenceSchema = new mongoose.Schema({
    Classe:{type:String, required: true },
    NameE:{type:String, required: true },
    Namep: {type:String, required: true },
    EmailE:String,
    EmailP:String,
    Date_abs:Date,
    heuresc:String,
    matiere:String
    
    

},
{
    timestamps: true ,
}
);

const Absence = mongoose.model("absences", absenceSchema);

module.exports = { Absence };