const {  Exercice } = require("../models/exercice.model");


module.exports = {
    showCreateFormE: (req, res) => {
        res.render("createE");
    },
    createexercice: async (req, res) => {
        const exercice = new Exercice(req.body);

        if(req.file){
            exercice.imageUrl= req.file.filename;
        }

        await exercice.save();
        res.json({ message: "exercice crée" });
      
    },
    showexercice: async (req, res) => {
        const exercices = await Exercice.find();
        
        res.json({ exercices  });
    },
    showUpdateexercice: async (req, res) => {
        const exercice = await Exercice.findById(req.params.id);
       
    },
    updateexercice: async (req, res) => {
        const exercice = await Exercice.findById(req.params.id);
        console.log(req.body)
        exercice.Designation = req.body.Designation;
        exercice.nomEnseignant = req.body.nomEnseignant;
        
        exercice.chapitre= req.body.chapitre; 
        
           if(req.file){
            exercice.imageUrl= req.file.filename;
        }

    
        await exercice.save();
        res.json({ message: "exercice modifié" });
    
    },
    showOneexercice: async (req, res) => {
        const exercice = await Exercice.findById(req.params.id);
        res.json({ exercice });
       
    },
    deleteexercice: async (req,res)=>{
        const { id } = req.params;
        await Exercice.remove({ _id: id });
        res.json({ message: "exercice supprimé" });
        
    },
}