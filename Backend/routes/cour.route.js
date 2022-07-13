const express = require("express");
const { showCreateFormC, createCour, showCour, showUpdateCour, showOneCour, updateCour, deleteCour } = require("../controller/cour.controller");
const router = express.Router();

/**
 * @Path /cours
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



router.get("/create", showCreateFormC)
router.post("/create", upload.single('imageUrl') , createCour)

router.get("/", showCour)
router.get("/update/:id" , showUpdateCour )
router.get("/show/:id" , showOneCour)
router.put("/update/:id" , updateCour)
router.delete("/delete/:id", deleteCour);



module.exports = router;