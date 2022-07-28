const {  Cour } = require("../models/cour.model");


module.exports = {
    showCreateFormC: (req, res) => {
        res.render("createC");
    },
    createCour: async (req, res) => {
        const cour = new Cour({
            Designation:req.body.Designation,
            nomcour:req.body.nomcour,
            nomEnseignant:req.body.nomEnseignant,
            chapitre:req.body.chapitre,
            EmailE:req.body.EmailE,
            EmailP:req.body.EmailP,
           
        });
        if(req.file){
            cour.imageUrl= req.file.path;
        }

        await cour.save();
        res.json({ message: "cours crée" });
      
    },
    showCour: async (req, res) => {
        const cours = await Cour.find();
        
        res.json( cours  );
    },
    showUpdateCour: async (req, res) => {
        const cour = await Cour.findById(req.params.id);
       
    },
    updateCour : async (req, res) => {
        const cour = await Cour.findById(req.params.id);
        console.log(req.body)
        cour.Designation = req.body.Designation;
        cour.nomcour=req.body.nomcour ; 
        cour.nomEnseignant = req.body.nomEnseignant;
        cour.EmailE=req.body.EmailE ; 
        cour.EmailP = req.body.EmailP;
        cour.imageUrl= req.body.imageUrl;
        cour.chapitre= req.body.chapitre; 

        await cour.save();
        res.json({ message: "cour modifié" });
    
    },
    showOneCour: async (req, res) => {
        const cour = await Cour.findById(req.params.id);
        res.json( cour );
       
    },
    deleteCour: async (req,res)=>{
        const { id } = req.params;
        await Cour.remove({ _id: id });
        res.json({ message: "evenement supprimé" });
        
    },
}