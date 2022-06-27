const {  Event } = require("../models/event.model");


module.exports = {
    showCreateFormE: (req, res) => {
        res.render("createE");
    },
    createEvent: async (req, res) => {
        const event = new Event(req.body);

        if(req.file){
            club.Image = req.file.filename;
        }

        await event.save();
        res.json({ message: "evenement crée" });
        //res.redirect("/events");
    },
    showEvents: async (req, res) => {
        const events = await Event.find();
        
        //res.render("events", { events });
        res.json({ events  });
    },
    showUpdateEvent: async (req, res) => {
        const event = await Event.findById(req.params.id);
        //res.render("updateE", { event });
    },
    updateEvent : async (req, res) => {
        const event = await Event.findById(req.params.id);
        console.log(req.body)
        event.Name = req.body.Name;
        event.Type = req.body.Type;
        event.Free = req.body.Free;
        event.Price = req.body.Price;
        event.Date_event = req.body.Date_event;
        event.Date_fin_event = req.body.Date_fin_event;
        event.Heure_debut = req.body.Heure_debut;
        event.Lieu = req.body.Lieu;
        event.Nbr_place = req.body.Nbr_place;
        event.Image = req.body.Image;
        event.Id_Club = req.body.Id_Club;

        await event.save();
        res.json({ message: "evenement modifié" });
    
        //res.redirect("/events");
    },
    showOneEvent: async (req, res) => {
        const event = await Event.findById(req.params.id);
        res.json({ event });
       // res.render("showE", { event });
    },
    deleteEvent: async (req,res)=>{
        const { id } = req.params;
        await Event.remove({ _id: id });
        res.json({ message: "evenement supprimé" });
        //res.redirect('/events');
    },
}