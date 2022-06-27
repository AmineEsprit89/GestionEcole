const mongoose = require("mongoose");

const notechema = new mongoose.Schema({
    Designation: String,
    nomEnseignant: String,
    noteCc:String,
    noteExam:String,
    imageUrl:String
    
    

});

const Note = mongoose.model("notes", notechema);

module.exports = { Note };