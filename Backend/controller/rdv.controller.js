const {  Rdv } = require("../models/rdv.model");


module.exports = {
    showCreateForm: (req, res) => {
        res.render("create");
    },
    createRdv: async (req, res) => {
        const rdv = new Rdv(req.body);

        if(req.file){
            rdv.Namep = req.file.filename;
            rdv.Emailp = req.file.filename;
            rdv.Date_r = req.file.filename;
            rdv.heure_r = req.file.filename;
            rdv.cause = req.file.filename;
            
            
        }

        await rdv.save();
        res.json({ message: "rdv crée" });
       // res.redirect("/clubs");
    },
    showRdvs: async (req, res) => {
        const rdvs = await Rdv.find();
        
        //res.render("clubs", { clubs });
        res.json({ rdvs  });
    },
    showUpdateRdv: async (req, res) => {
        const rdv = await Rdv.findById(req.params.id);
        //res.render("update", { club });
        
    },
    updateRdv : async (req, res) => {
        const rdv = await Rdv.findById(req.params.id);
        console.log(req.body)
        rdv.Namep = req.body.Namep;
        rdv.Emailp = req.body.Emailp;
        rdv.Date_r = req.body.Date_r;
        rdv.heure_r = req.body.heure_r;
        rdv.cause = req.body.cause;
        
        await rdv.save();
        res.json({ message: "rdv modifiée" });
       
       
        
       // res.redirect("/clubs");
    },
    showOneRdv: async (req, res) => {
        const rdv = await Rdv.findById(req.params.id);
        res.json({ rdv });
       // res.render("show", { club });
       

    },
    deleteRdv: async (req,res)=>{
        const { id } = req.params;
        await Rdv.remove({ _id: id });
       res.json({ message: "rdv supprimé" });
       // res.redirect('/clubs');
    }
}