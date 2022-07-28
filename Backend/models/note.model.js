const mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({
    Designation: {type:String, minLength:5 , maxLength:20, required: true },
    nomEnseignant: {type:String, minLength:5 , maxLength:20, required: true }, 
    noteCc:{type: Number , min:0,max: 20 , required: false },
    noteExam:{type: Number,min:0,max: 20 , required: true},
    EmailE:String,
    EmailP:String,
    imageUrl:String
});



 const Note = mongoose.model("notes", noteSchema);

 module.exports = { Note }
