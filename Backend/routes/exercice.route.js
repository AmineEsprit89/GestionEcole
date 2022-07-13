const express = require("express");
const { showCreateFormE, createexercice, showexercice, showUpdateexercice, showOneexercice, updateexercice, deleteexercice } = require("../controller/exercice.controller");
const router = express.Router();

/**
 * @Path /exercices
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

router.get("/create", showCreateFormE)
router.post("/create", upload.single('imageUrl') , createexercice)

router.get("/", showexercice)
router.get("/update/:id" , showUpdateexercice )
router.get("/show/:id" , showOneexercice)
router.post("/update/:id" , updateexercice)
router.delete("/delete/:id", deleteexercice);



module.exports = router;