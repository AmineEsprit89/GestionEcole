const express = require("express");
const { showCreateForm, createAbsence, showAbsences, showUpdateAbsence, showOneAbsence, updateAbsence, deleteAbsence } = require("../controllers/absence.controller");
const router = express.Router();

/**
 * @Path /absences
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
router.post("/create", upload.single('NameE') , createAbsence)

router.get("/", showAbsences)
router.get("/update/:id" , showUpdateAbsence )
router.get("/show/:id" , showOneAbsence)
router.post("/update/:id" , updateAbsence)
router.get('/delete/:id', deleteAbsence);



module.exports = router;