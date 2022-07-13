const { Professeur } = require("../models/professeur.model");


module.exports = {

     // afficher tous les prof
     getAllProfs: async (req, res) => {      
        const professeurs = await Professeur.find();
        //res.render('list', { professeurs })
        res.json(professeurs)
    },
        //ajouter un prof
        showForm: (req, res) => {
            res.render('create');
        },
        //ajouter une nouvelle classe post
        createNewProf: async (req, res) => {
            const professeur = new Professeur(req.body);
            
            await professeur.save();

            res.json({message: "Prof ajoutée"});
        },
        getProfById: async (req, res) => {      
            const { id } = req.params;
            const professeur = await Professeur.findById(id);
            res.render('showPr', { professeur });
        },
    
        deleteProfessuer: async (req,res)=>{
            const { id } = req.params;
            await Professeur.remove({ _id: id });
            res.json({message: "Prof supprimée"});
        },
        showUpdate: async (req, res) => {
            const professeur = await Professeur.findById(req.params.id);
            res.render("updatePr", { message: "Prof modifiée"});
        },
        
        updateProf : async (req, res) => {
            const professeur = await Professeur.findById(req.params.id);
            console.log(req.body)
            professeur.ProfID = req.body.ProfID;
            professeur.NomProf = req.body.NomProf;
            professeur.PrenomProf = req.body.PrenomProf;
            professeur.AgeProf = req.body.AgeProf;
            professeur.EmailProf = req.body.EmailProf;
            professeur.AdresseProf = req.body.AdresseProf;
            professeur.Specialite = req.body.Specialite;
            await professeur.save();
            console.log(professeur);
            res.json({message: "Profil du Porf modifié"});


        }
    
    
    }