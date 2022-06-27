var express = require('express');
var router = express.Router();
const { getAllClasses, showForm, createNewClasse, getClasseById, deleteClasse, showUpdate, updateClasse } = require("../controller/classe.controller");
const multer = require("multer");

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
router.get('/', getAllClasses);   


//ajouter un nouveau classe
router.route('/create')                         
  .get(showForm)
  .post(upload.single('ListEleve'), createNewClasse);

router.get('/:id', getClasseById);

router.get('/delete/:id', deleteClasse);


router.get("/update/:id" , showUpdate)
router.post("/update/:id" , updateClasse )

  module.exports = router;