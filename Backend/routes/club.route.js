const express = require("express");
const { showCreateForm, createClub, showClubs, showUpdateClub, showOneClub, updateClub, deleteClub } = require("../controller/club.controller");
const router = express.Router();

/**
 * @Path /clubs
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
router.post("/create", upload.single('Type') , createClub)

router.get("/", showClubs)
router.get("/update/:id" , showUpdateClub )
router.get("/show/:id" , showOneClub )
router.post("/update/:id" , updateClub)
router.get('/delete/:id', deleteClub);



module.exports = router;