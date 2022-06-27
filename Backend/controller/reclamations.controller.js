const { Reclamation } = require("../models/reclamation.model");

module.exports = {

    createNewReclamation: async (req, res) => {         //works!!
        const reclamation = new Reclamation({
            objet : req.body.objet,
            contenu : req.body.contenu,
            priorite : req.body.priorite,
        })
        await reclamation.save();
        console.log(req.body);
        res.json(reclamation);
    },  

    getAllreclations: async (req, res) => {   //works!!
        const reclamations = await Reclamation.find();
        res.json(reclamations)
    },

    getreclamationtById: async (req, res) => {          //works!!
        const { id } = req.params;
        const reclamation = await Reclamation.findById(id);
        res.json(reclamation);
    },

    updateReclamation : async (req, res) => {          //works!!
        const reclamation = await Reclamation.findById(req.params.id);
        console.log(req.body);
        reclamation.objet = req.body.objet;
        reclamation.contenu = req.body.contenu;
        reclamation.moyenDePaiment = req.body.priorite;
        await reclamation.save();
        res.json(reclamation);
    },

    deleteReclamation: async (req,res)=>{          //works!!
        const reclamation = await Reclamation.findById(req.params.id);
        //const { id } = req.params;
        await reclamation.remove(/*{ _id: id }*/);
        //res.json(reclamation);
    }


}