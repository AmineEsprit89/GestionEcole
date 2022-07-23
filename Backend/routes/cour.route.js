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
/*
const PDFDocument=require('pdfkit'); 
const fs= require('fs') ; 
// Create a document 
const doc=new PDFDocument(); 
// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

// Embed a font, set the font size, and render some text
doc
  .font('fonts/PalatinoBold.ttf')
  .fontSize(25)
  .text('Some text with an embedded font!', 100, 100);
//finaliza pdf file
doc.end(); 




/* Initialize App
const app = express();
  
// Assign route
app.use('/', (req, res, next) => {
  const filters = req.query;
  const filteredCours = data.filter(cour => {
    let isValid = true;
    for (key in filters) {
      console.log(key, cour[key], filters[key]);
      isValid = isValid && cour[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredCours);
});
  
// Start server on PORT 5000
app.listen(5000, () => {
  console.log('Server started!');
});
*/
router.get("/create", showCreateFormC)
router.post("/create", upload.single('imageUrl') , createCour)

router.get("/", showCour)
router.get("/update/:id" , showUpdateCour )
router.get("/show/:id" , showOneCour)
router.post("/update/:id" , updateCour)


router.get("/delete/:id", deleteCour);



module.exports = router;