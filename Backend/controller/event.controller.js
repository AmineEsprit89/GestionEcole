const {  Event } = require("../models/event.model");
const {  sendEventEmail } = require("../nodemailer/nodemailer.event"); 
// model user
//const user = new User();


module.exports = {
    showCreateFormE: (req, res) => {
        res.render("createE");
    },
    createEvent: async (req, res) => {
        const event = new Event({
            Name:req.body.Name,
            Type:req.body.Type,
            Free:req.body.Free,
            Price:req.body.Price,
            Date_event:req.body.Date_event,
            Date_fin_event:req.body.Date_fin_event,
            Heure_debut:req.body.Heure_debut,
            Lieu:req.body.Lieu,
            Nbr_place:req.body.Nbr_place,
            Nom_Club:req.body.Nom_Club,
<<<<<<< HEAD
            


        });

        if(req.file){
            event.Image = req.file.filename;
         }
=======
            Image:req.body.Image


        });

        // if(req.file){
        //     event.Image = req.file.filename;
        // }
>>>>>>> 96911e4a6e6da26c6467c1c19bd1050405b6d844

        await event.save();
        res.json({ message: "evenement crée" });
        //res.redirect("/events");

        //for( int i = 0 ; i<user.length ; i++){
           // user[i].email
        sendEventEmail("rabii.benkhlifa@esprit.tn",event.Name,event.Type,event.Price,event.Free,
                          event.Date_event,event.Heure_debut,event.Date_fin_event,event.Lieu,
                          event.Nbr_place,event.Nom_Club)
                          
    //}
    },
    showEvents: async (req, res) => {
        const events = await Event.find();
        
        //res.render("events", { events });
        res.json(events);
       

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
        
        event.Nom_Club = req.body.Nom_Club;
        event.Image = req.body.Image;

        await event.save();
        res.json({ message: "evenement modifié" });
    
        //res.redirect("/events");
    },
    showOneEvent: async (req, res) => {
        const event = await Event.findById(req.params.id);
        res.json( event );
       // res.render("showE", { event });
    },
    deleteEvent: async (req,res)=>{
        const { id } = req.params;
        await Event.remove({ _id: id });
        res.json({ message: "evenement supprimé" });
        //res.redirect('/events');
    },
    testEvent: async (req,res)=>{
       
        //res.redirect('/events');
    },





}