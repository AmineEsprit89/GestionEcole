const mongoose = require("mongoose");

const absenceSchema = new mongoose.Schema({
    NameE: String,
    Namep: String,
    Emailp:String,
    Date_abs:Date,
    heuresc:String,
    matiere:String
    
    

});

const Absence = mongoose.model("absences", absenceSchema);

module.exports = { Absence };