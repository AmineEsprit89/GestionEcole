var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();


//importer mongoose et connection a la base de donnees
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log("database connected"))
  .catch((reason) => {
    console.log(reason);
  });


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var paymentsRouter = require('./routes/payments');
var reclamationsRouter = require('./routes/reclamations');
var noteRouter = require('./routes/note.route');
var courRouter = require('./routes/cour.route');
var exerciceRouter = require('./routes/exercice.route');
var absenceRouter = require('./routes/absence.route');
var rdvRouter = require('./routes/rdv.route');
var clubRouter = require('./routes/club.route');
var eventRouter = require('./routes/event.route');
var classesRouter = require('./routes/classes');
var niveauxRouter = require('./routes/niveaux');
var professeurRouter = require('./routes/professeur');
var eleveRouter = require('./routes/eleve');
var pdfRouter = require('./routes/pdf.routes');
var socialpostRouter = require('./routes/socialpost.routes');
var pdfrouter = require('./routes/pdfuser');
var cors = require ('cors');
var xlsxRouter = require('./routes/xlsx');
var absxlsxRouter = require('./routes/absxlsx');
//require('.env').config();


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

//middlewares cree par defaut
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use('/upload',express.static(__dirname+'/upload'));
app.use(express.static('public'))


app.all('/*',(req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Method','GET,PUT,POST,DELETE,OPTIONS,PATCH');
  res.header('Access-Control-Allow-Headers','Content-Type,Authorization,Content-Length,X-Requested-With');
  next()
  })

  
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.use('/public',express.static(__dirname+'/public'));


//app.use(express.urlencoded({ extended: false }));

//on consomme la route comme un middleware : celle qu'on a cree et importe en haut 
//app.use('/', indexRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/payments', paymentsRouter);
app.use('/reclamations', reclamationsRouter);
app.use('/notes', noteRouter);
app.use('/cours', courRouter);
app.use('/exercices', exerciceRouter);
app.use('/absences', absenceRouter);
app.use('/rdvs', rdvRouter);
app.use('/clubs', clubRouter);
app.use('/events', eventRouter);
app.use('/classes', classesRouter);
app.use('/niveaux', niveauxRouter);
app.use('/professeur', professeurRouter);
app.use('/eleve', eleveRouter);
app.use('/pdf', pdfRouter);
app.use('/pdfuser', pdfrouter);
app.use('/socialpost', socialpostRouter);
app.use('/xlsx', xlsxRouter);
app.use('/absxlsx', absxlsxRouter);








// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
