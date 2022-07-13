const mongoose = require("mongoose");

var notechema = new mongoose.Schema({
    Designation: String,
    nomEnseignant: String,
    noteCc:String,
    noteExam:String,
    imageUrl:String
    
    

});

// const Note = mongoose.model("notes", notechema);


module.exports = mongoose.model('notes',notechema);
