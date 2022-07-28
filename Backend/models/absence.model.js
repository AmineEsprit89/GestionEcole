const mongoose = require("mongoose");

const absenceSchema = new mongoose.Schema({
    Classe:String,
    NameE: String,
    Namep: String,
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