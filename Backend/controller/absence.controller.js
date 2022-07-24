const {  Absence } = require("../models/absence.model");
const {  sendAbsenceMail } = require("../nodemailer.parent.absence");


module.exports = {
    showCreateForm: (req, res) => {
        res.render("create");
    },
    createAbsence: async (req, res) => {
        const absence = new Absence(req.body);

        if(req.file){
            absence.NameE = req.file.filename;
            absence.Namep = req.file.filename;
            absence.Emailp = req.file.filename;
            absence.Date_abs = req.file.filename;
            absence.heuresc = req.file.filename;
            absence.matiere = req.file.filename;
            
            
        }

        await absence.save();
        res.json({ message: "absence crée" });
        sendAbsenceMail("slim.nejmaoui@esprit.tn",absence.NameE,absence.Date_abs,absence.heuresc,absence.matiere)
       // res.redirect("/clubs");
    },
    showAbsences: async (req, res) => {
        const absences = await Absence.find();
        
        //res.render("clubs", { clubs });
        res.json( absences  );
    },
    showUpdateAbsence: async (req, res) => {
        const absence = await Absence.findById(req.params.id);
        //res.render("update", { club });
        
    },
 
    updateAbsence : async (req, res) => {
        const absence = await Absence.findById(req.params.id);
        console.log(req.body)
        absence.NameE = req.body.NameE;
        absence.Namep = req.body.Namep;
        absence.Emailp = req.body.Emailp;
        absence.Date_abs = req.body.Date_abs;
        absence.heuresc = req.body.heuresc;
        absence.matiere = req.body.matiere;
        await absence.save();
        res.json({ message: "absence modifiée" });
       
       
        
       // res.redirect("/clubs");
    },
    showOneAbsence: async (req, res) => {
        const absence = await Absence.findById(req.params.id);
        res.json( absence );
       // res.render("show", { club });
       

    },
    deleteAbsence: async (req,res)=>{
        const { id } = req.params;
        await Absence.remove({ _id: id });
       res.json({ message: "absence supprimé" });
       // res.redirect('/clubs');
    }
}