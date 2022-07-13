const { Eleve } = require("../models/eleve.model");
const { sendEmailToEleve } = require("../nodemailer.eleve");
const { PDFNet } = require('@pdftron/pdfnet-node');
const path = require('path');

module.exports = {

     // afficher tous les eleve
     getAllEleve: async (req, res) => {      
        const eleve = await Eleve.find();
        //res.render('list', { professeurs })
        res.json(eleve)
    },
        //ajouter un prof
        showForm: (req, res) => {
            res.render('create');
        },
        //ajouter une nouvelle classe post
        createNewEleve: async (req, res) => {
            const eleve = new Eleve(req.body);
            
            await eleve.save();
            sendEmailToEleve ("zied.hedhiri@esprit.tn",eleve.PrenomEleve, eleve.NomEleve, eleve.EmailEleve, eleve.DateNaissance)


            res.json({message: "eleve ajouté"});
        },
        getEleveById: async (req, res) => {      
            const { id } = req.params;
            const eleve = await Eleve.findById(id);
            res.render('showEl', { eleve });
        },
    
        deleteEleve: async (req,res)=>{
            const { id } = req.params;
            await Eleve.remove({ _id: id });
            res.json({message: "eleve supprimée"});
        },
        showUpdate: async (req, res) => {
            const eleve = await Eleve.findById(req.params.id);
            res.render("updateEl", { message: "Eleve modifié"});
        },
        
        updateEleve : async (req, res) => {
            const eleve = await Eleve.findById(req.params.id);
            console.log(req.body)
            
            eleve.NomEleve = req.body.NomEleve;
            eleve.PrenomEleve = req.body.PrenomEleve;
            eleve.SexeEleve = req.body.SexeEleve;
            eleve.EmailEleve = req.body.EmailEleve;
            eleve.AdresseEleve = req.body.AdresseEleve;
            eleve.DateNaissance = req.body.DateNaissance;
            await eleve.save();
            console.log(eleve);
            res.json({message: "Profil de l'élève modifié"});

        },




        listeAppel: async (req, res) => {
            const inputPath = path.resolve(__dirname, '../public/LA.pdf');
            const outputPath = path.resolve(__dirname, '../public/ListeAppel.pdf');
            const eleves = [{nom: 'Zied Hedhiri', sexe: 'M'}, {nom: 'Amin Hamdi', sexe: 'M'},
            {nom: 'Asma Latifa', sexe: 'F'},{nom: 'Samira Said', sexe: 'F'},{nom: 'Ali Salah', sexe: 'M'}]
            //const eleves = await Eleve.find({});
            
            const replaceText = async () => {
                const pdfdoc = await PDFNet.PDFDoc.createFromFilePath(inputPath);
                await pdfdoc.initSecurityHandler();
                const replacer = await PDFNet.ContentReplacer.create();
                const page = await pdfdoc.getPage(1);
                 for(let i=0; i<eleves.length;i++){
                    await replacer.addString(`eleve${i+1}`, eleves[i].nom);
                    await replacer.addString(`sexe${i+1}`, eleves[i].sexe);
                 }
                
    
                await replacer.process(page);
    
                pdfdoc.save(outputPath, PDFNet.SDFDoc.SaveOptions.e_linearized);
    
            };
            PDFNet.runWithCleanup(replaceText, 'demo:1650992827646:7ba47c0603000000006860a9f9f1205880d6365851503475dfd34d33ad').then(() => {
                fs.readFile(outputPath, async (err, data) => {
                    if (err) {
                        res.status = 500;
                        res.send(err);
                    }
                    else {
                        res.setHeader('ContentType', 'application/pdf');
                        res.end(data);
                    }
                });
            }).catch((err) => {
                res.status = 500;
                res.send(err);
            });
        }

    
    
    }