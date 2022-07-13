const express = require("express");
const { showCreateForm, createRdv, showRdvs, showUpdateRdv, showOneRdv, updateRdv, deleteRdv } = require("../controller/rdv.controller");
const router = express.Router();

/**
 * @Path /rdvs
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
router.post("/create", upload.single('Type') , createRdv)

router.get("/", showRdvs)
router.get("/update/:id" , showUpdateRdv )
router.get("/show/:id" , showOneRdv )
router.post("/update/:id" , updateRdv)
router.get('/delete/:id', deleteRdv);



module.exports = router;