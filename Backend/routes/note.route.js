const express = require("express");
 
const { showCreateForm, createNote, showNotes, showUpdateNote, showOneNote, updateNote, deleteNote } = require("../controller/note.controller");
const router = express.Router();

/**
 * @Path /notes
 */


const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
        const filename = (+ new Date()) + "-" + file.originalname;
        cb(null, filename);
    }
});


const upload = multer({storage})
/*const PDFDocument = require("pdfkit");
const fs = require('fs');

//Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

// Embed a font, set the font size, and render some text
doc

  .fontSize(25)
  .text('les notes des modules  ');

// Finalize PDF file
doc.end();
*/



router.get("/create", showCreateForm)
router.post("/create", upload.single('Type') , createNote)

router.get("/", showNotes)
router.get("/update/:id" , showUpdateNote )
router.get("/show/:id" , showOneNote )
router.post("/update/:id" , updateNote)
router.get("/delete/:id", deleteNote);



module.exports = router;