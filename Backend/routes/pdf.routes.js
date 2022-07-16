var express = require('express');
var router = express.Router();
const PDFDocument = require("../pdfkit-tables");
const fs = require('fs');
const {  Note } = require("../models/note.model");


router.get('/',async function(req,res){
  var note = await Note.find();
 if(!note)
 {
   res.status(400).json({
     message: 'note not found!'
   });
 }
 
 
  
    const doc = new PDFDocument();
    doc.fontSize(25);
    doc.pipe(fs.createWriteStream('output.pdf'));
    doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Notes De Module", 110, 57)
    .fontSize(10)
    .text("Welcome to,", 200, 65, { align: "right" })
    .text("Ed tech", 200, 80, { align: "right" })
    .moveDown();

    
    const table = {
      headers: ["Designation", "nomEnseignant","noteCc","noteExam"],
      rows: []
  };
  for (const notes of note){
    table.rows.push([notes.Designation , notes.nomEnseignant, notes.noteCc,  notes.noteExam  ])
  }

    doc.moveDown().table(table, 10, 125, { width: 590 });

    doc.moveDown();
    doc.moveDown();

    doc.moveDown();
doc
.text("Adresse : 18 Rue de l'Usine, Tunis 2035")
.text("EDTHEC ... Se Former autrement pour une nouvelle génération d'ingénieurs. ," , {  width: 560, align: 'center'})

    doc.end(); 
   
  
  });
  
  
  module.exports = router;