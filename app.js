var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
var Sports = require("./models/SportsSchema");

var indexRouter = require('./routes/index');
var SportsRouter = require('./routes/Sports');
var usersRouter = require('./routes/users');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Sports', SportsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed onserver start
async function recreateDB(){
// Delete everything
await Sports.deleteMany();

let instance1 = new
Sports({SportsCar:"Ferari", Sportsperson:'Salman',
sportsbike:'Fazer'});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});

let instance2 = new
Sports({SportsCar:"BMW", Sportsperson:'Sharuk',
sportsbike:'Bullet'});
instance2.save().then(doc=>{
console.log("Second object saved")}
).catch(err=>{
console.error(err)
});

let instance3 = new
Sports({SportsCar:"Audi", Sportsperson:'Amir',
sportsbike:'Thuderstrome'});
instance3.save().then(doc=>{
console.log("Third object saved")}
).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;
