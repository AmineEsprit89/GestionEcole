const {  Club } = require("../models/club.model");


module.exports = {
    showCreateForm: (req, res) => {
        res.render("create");
    },
    createClub: async (req, res) => {
        const club = new Club({
        Name:req.body.Name,
        Type:req.body.Type,
        Date_seance:req.body.Date_seance,
        Heure_debut:req.body.Heure_debut,
        Duree:req.body.Duree,
        Description:req.body.Description,
        Heure_debut:req.body.Heure_debut,

    });
        

        if(req.file){
            club.Logo = req.file.filename;
        }

        await club.save();
        res.json({ message: "club crée" });
       // res.redirect("/clubs");
    },
    showClubs: async (req, res) => {
        const clubs = await Club.find();
        
        //res.render("clubs", { clubs });
        res.json( clubs );
    },
    showUpdateClub: async (req, res) => {
        const club = await Club.findById(req.params.id);
        //res.render("update", { club });
        
    },
    updateClub : async (req, res) => {
        const club = await Club.findById(req.params.id);
        console.log(req.body)
        club.Name = req.body.Name;
        club.Type = req.body.Type;
        club.Date_seance = req.body.Date_seance;
        club.Heure_debut = req.body.Heure_debut;
        club.Duree = req.body.Duree;
        club.Description = req.body.Description;
        club.Logo = req.body.Logo;

        await club.save();
        res.json( {message: "club modifié"} );
       
        
       // res.redirect("/clubs");
    },
    showOneClub: async (req, res) => {
        const club = await Club.findById(req.params.id);
        res.json(club );
       // res.render("show", { club });
       

    },
    deleteClub: async (req,res)=>{
        const { id } = req.params;
        await Club.remove({ _id: id });
       res.json({ message: "club supprimé" });
       // res.redirect('/clubs');
    }
}