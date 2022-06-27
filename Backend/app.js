var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//importer mongoose et connection a la base de donnees
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/pidev")
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


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

//middlewares cree par defaut
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
