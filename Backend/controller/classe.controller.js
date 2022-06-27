const { Classe } = require("../models/classe.model");

module.exports = {

     // afficher tous les Classes
     getAllClasses: async (req, res) => {      
        const classes = await Classe.find();
        res.render('list', { classes })
    },
        //ajouter une nouvelle classe
        showForm: (req, res) => {
            res.render('create');
        },
        //ajouter une nouvelle classe post
        createNewClasse: async (req, res) => {
            //verifier si classe existe deja dans BD CHECK
            const { ClsID } = req.body;
            const doesClasseExists = await Classe.findOne({ ClsID });
            if (doesClasseExists) {
                return res.json({ error: "La Classe est déjà existante" });
            }
            //
            const classe = new Classe(req.body);
            //Verifier si la requete contient un fichier et le nommer
            if (req.file) {
                classe.ListEleves = req.file.filename; 
            }
            //ajouter a la base de donnes et redirection vers liste des classes
            await classe.save();
            res.json({message: "Classe ajoutée"});
        },
        getClasseById: async (req, res) => {      
            const { id } = req.params;
            const classe = await Classe.findById(id);
            res.render('show', { classe });
        },
    
        deleteClasse: async (req,res)=>{
            const { id } = req.params;
            await Classe.remove({ _id: id });
            res.json({message: "Classe supprimée"});
        },
        showUpdate: async (req, res) => {
            const classe = await Classe.findById(req.params.id);
            res.render("update", { message: "Classe modifiée"});
        },
        
        updateClasse : async (req, res) => {
            const classe = await Classe.findById(req.params.id);
            console.log(req.body)
            classe.ClsID = req.body.ClsID;
            classe.NbrEleves = req.body.NbrEleves;
            classe.ChefDeClasse = req.body.ChefDeClasse;
            classe.ListEleves = req.body.ListEleves;
            await classe.save();
            console.log(classe);
            res.json({message: "Classe modifiée"});
        }
    
    
    }