var express = require('express');
var router = express.Router();
const PDFDocument = require("../pdfkit-tablesEl");
const fs = require('fs');
const { User } = require("../models/user.model");
const e = require('express');


router.get('/',async function(req,res){
    const user = await User.find();
   if(!user)
   {
     res.status(400).json({
       message: 'Pas d élèves'
     });
   }
  
    const doc = new PDFDocument();
    doc.fontSize(25);
    doc.pipe(fs.createWriteStream('Liste des élèves.pdf'));
    doc
    .fillColor("#b03060")
    .fontSize(18)
    .text("Liste d'appel", 110, 57)
    .fontSize(10)
    .moveDown();


    const table = {
      headers: ["Nom", "Prénom","Date de naissance", "E-mail"],
      rows: []  
  };

  for (const e of user){
    if (e.accountType == "Eleve"){
    table.rows.push([e.nom, e.prenom, e.dateDeNaissance, e.email,])
  }
}
    doc.moveDown().table(table, 10, 125, { width: 590 });

    doc.moveDown();
    
    doc.moveDown();
    doc.moveDown();
    doc.end(); 

});

 
  module.exports = router;
