var express = require('express');
var router = express.Router();
const niveau = require("../controller/niveau.controller");
const multer = require("multer");
const { getAllNiveaux, createNewNiveau, getNiveauById, deleteNiveau, updateNiveau } = require('../controller/niveau.controller');
const { showUpdate } = require('../controller/classe.controller');

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
 * @Path /niveaux
*/

// lister les niveaux
router.get('/', getAllNiveaux);   


//ajouter un nouveau niveau
router.route('/createNV')                         
  .get(niveau.showForm)
  .post(upload.single('ListEleve'),createNewNiveau);

router.get('/:id', getNiveauById);

router.get('/deleteNV/:id', deleteNiveau);


router.get("/updateNV/:id" , showUpdate )
router.post("/updateNV/:id" , updateNiveau )

  module.exports = router;