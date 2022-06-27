const express = require("express");
const { showCreateForm, createNote, showNotes, showUpdateNote, showOneNote, updateNote, deleteNote } = require("../controllers/note.controller");
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



router.get("/create", showCreateForm)
router.post("/create", upload.single('Type') , createNote)

router.get("/", showNotes)
router.get("/update/:id" , showUpdateNote )
router.get("/show/:id" , showOneNote )
router.post("/update/:id" , updateNote)
router.get("/delete/:id", deleteNote);



module.exports = router;