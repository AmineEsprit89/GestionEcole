var express = require('express');
var router = express.Router();
const professeur = require("../controller/professeur.controller");
const multer = require("multer");
const { getAllProfs, createNewProf, getProfById, deleteProfessuer, updateProf } = require('../controller/professeur.controller');
const { showUpdate } = require('../controller/professeur.controller');

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
 * @Path /niveauxprofesseur
*/

// lister les niveaux
router.get('/', getAllProfs);   


//ajouter un nouveau niveau
router.route('/createPr')                         
  .get(professeur.showForm)
  .post(upload.single('ListProf'),createNewProf);

router.get('/:id', getProfById);

router.get('/deletePr/:id', deleteProfessuer);


router.get("/updatePr/:id" , showUpdate )
router.post("/updatePr/:id" , updateProf )

  module.exports = router;