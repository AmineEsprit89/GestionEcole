const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    Name: String,
    Type: String,
    Free:String,
    Price:Number,
    Date_event:Date,
    Date_fin_event:Date,
    Heure_debut:String,
    Lieu:String,
    Nbr_place:String,
    Image:String,
    Nom_Club:String
    
    

});

const Event = mongoose.model("events", eventSchema);

module.exports = { Event };