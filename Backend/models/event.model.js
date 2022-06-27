const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    Name: String,
    Type: String,
    Free:String,
    Price:Number,
    Date_event:String,
    Date_fin_event:String,
    Heure_debut:String,
    Lieu:String,
    Nbr_place:String,
    Image:String,
    Id_Club:String
    
    

});

const Event = mongoose.model("events", eventSchema);

module.exports = { Event };