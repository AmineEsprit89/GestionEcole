const {  Note } = require("../models/note.model");


module.exports = {
    showCreateForm: (req, res) => {
        res.render("create");
    },
    createNote: async (req, res) => {
        const note = new Note(req.body);

        if(req.file){
            note.Type = req.file.filename;
        }

        await note.save();
        res.json({ message: "note crée" });
     
    },
    showNotes: async (req, res) => {
        const notes = await Note.find();
        
        res.json({ notes });
    },
    showUpdateNote: async (req, res) => {
        const note = await Note.findById(req.params.id);
        
        
    },
    updateNote : async (req, res) => {
        const note = await Note.findById(req.params.id);
        console.log(req.body)
        console.log(req.body)
        note.Designation= req.body.Designation;
        note.nomEnseignant = req.body.nomEnseignant ;
        note.noteCc = req.body.noteCc;
        note.noteExam = req.body.noteExam;
        imageUrl = req.body.imageUrl;
        await note.save();
        res.json({ message: "note modifiée" });
       
        
       
    },
    showOneNote: async (req, res) => {
        const note = await Note.findById(req.params.id);
        res.json({ note });
       
       

    },
    deleteNote: async (req,res)=>{
        const { id } = req.params;
        await Note.remove({ _id: id });
       res.json({ message: "note supprimé" });
     
    }
}