var express = require('express');
var router = express.Router();
const {showForm, showUpdate, listeAppel } = require("../controller/eleve.controller");
const multer = require("multer");
const { getAllEleve, createNewEleve, getEleveById, deleteEleve, updateEleve } = require('../controller/eleve.controller');

//config standard multer pour ajout des fichiers
const storage = multer.diskStorage(
  {
    filename: (req, file, cb) => {
      const newFileName = (+new Date()).toString() + file.originalname;
      cb(null, newFileName);
    },
    destination: (req, file, cb) => {
      cb(null, './public/images/')
    }
  }
);
const upload = multer({ storage });

/**
 * @Path /classes
*/

// lister les classes
router.get('/', getAllEleve);   


//ajouter un nouveau classe
router.route('/createEl')                         
  .get(showForm)
  .post(upload.single('ListEleve'), createNewEleve);

router.get('/:id', getEleveById);

router.get('/deleteEl/:id', deleteEleve);


router.get("/updateEl/:id" , showUpdate)
router.post("/updateEl/:id" , updateEleve )
router.post("/ListeAppel/" , listeAppel )

  module.exports = router;