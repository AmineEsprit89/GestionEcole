const mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({
    Designation: String,
    nomEnseignant: String,
    noteCc:String,
    noteExam:String,
    imageUrl:String
});



 const Note = mongoose.model("notes", noteSchema);

 module.exports = { Note }
