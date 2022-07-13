const express = require("express");
const { deleteEvent, updateEvent, showOneEvent, showUpdateEvent, showEvents, createEvent, showCreateFormE } = require("../controller/event.controller");
const router = express.Router();

/**
 * @Path /events
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
router.post("/create", upload.single('Image') , createEvent)

router.get("/", showEvents)
router.get("/update/:id" , showUpdateEvent )
router.get("/show/:id" , showOneEvent)
router.post("/update/:id" , updateEvent)
router.get('/delete/:id', deleteEvent);



module.exports = router;