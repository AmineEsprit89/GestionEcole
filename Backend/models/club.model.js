const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
    Name: String,
    Type: String,
    Date_seance: Date,
    Heure_debut:String,
    Duree:String ,
    Description:String,
    Logo:String
    
    

});

const Club = mongoose.model("clubs", clubSchema);

module.exports = { Club };