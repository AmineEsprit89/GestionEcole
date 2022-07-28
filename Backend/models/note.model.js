const mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({
    Designation: {type:String, minLength:5 , maxLength:20, required: true },
    nomEnseignant: {type:String, minLength:5 , maxLength:20, required: true }, 
    noteCc:{type: Number , min:0,max: 20 , required: false },
    noteExam:{type: Number,min:0,max: 20 , required: true},
<<<<<<< HEAD
    EmailE:String , 
    EmailP:String , 
=======
    EmailE:String,
    EmailP:String,
>>>>>>> 158d9027f369063fefa196474e61790b028172ce
    imageUrl:String
});



 const Note = mongoose.model("notes", noteSchema);

 module.exports = { Note }
