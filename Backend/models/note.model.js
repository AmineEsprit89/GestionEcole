const mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({
<<<<<<< HEAD
    Designation: {type:String, minLength:5 , maxLength:20, required: true },
    nomEnseignant: {type:String, minLength:5 , maxLength:20, required: true }, 
    EmailE:String,
    EmailP:String,
=======
    Designation: {type:String, minLength:2 , maxLength:20, required: true },
    nomEnseignant: {type:String, minLength:3 , maxLength:20, required: true }, 
>>>>>>> 1f743d9a27f57972bce2711d3042dbdc87a2cd49
    noteCc:{type: Number , min:0,max: 20 , required: false },
    noteExam:{type: Number,min:0,max: 20 , required: true},
<<<<<<< HEAD
    EmailE:String,
    EmailP:String,
    
=======
<<<<<<< HEAD
    EmailE:String , 
    EmailP:String , 
=======
    EmailE:String,
    EmailP:String,
>>>>>>> 158d9027f369063fefa196474e61790b028172ce
>>>>>>> 5e03e279db51fcf90d4f2a2e9e46d2b396234760
    imageUrl:String
});



 const Note = mongoose.model("notes", noteSchema);

 module.exports = { Note }
