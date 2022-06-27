const { Niveau } = require("../models/niveau.model");

module.exports = {

     // afficher tous 
     getAllNiveaux: async (req, res) => {      
        const niveaux = await Niveau.find();
        res.json({message: "Niveau ajouté"});
    },
        //ajouter un NV
        showForm: (req, res) => {
            res.render('createNV');
        },
        //ajouter un NV post
        createNewNiveau: async (req, res) => {
            //verifier si NV existe deja dans BD CHECK
            const { NvID } = req.body;
            const doesNiveauExists = await Niveau.findOne({ NvID });
            if (doesNiveauExists) {
                return res.json({ error: "Niveau Existant" });
            }
            //
            const niveau = new Niveau(req.body);
           
            //ajouter a la base de donnes et redirection vers liste des NV
            await niveau.save();
            res.redirect('/niveaux');
        },
        getNiveauById: async (req, res) => {      
            const { id } = req.params;
            const niveau = await Niveau.findById(id);
            res.render('showNV', { niveau });
        },
    
        deleteNiveau: async (req,res)=>{
            const { id } = req.params;
            await Niveau.remove({ _id: id });
            res.json({message: "niveau supprimée"});
        },
        showUpdate: async (req, res) => {
            const niveau = await Niveau.findById(req.params.id);
            res.render("updateNV", { message: "niveau modifié"});
        },
        
        updateNiveau : async (req, res) => {
            const niveau = await Niveau.findById(req.params.id);
            console.log(req.body)
            niveau.NvID = req.body.NvID;
            niveau.ProfResp = req.body.ProfResp;
            niveau.ListeFiliere = req.body.ListeFiliere;
            
            await niveau.save();
            console.log(niveau);
            res.json({message: "Niveau modifié"});
        }
    
    
    }