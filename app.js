var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require ('dotenv').config()
const mongoose =require('mongoose')

//var indexRouter = require('./routes/index');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connected to db"))
.catch(err=>console.log(err))

//app.use('/api', indexRouter);


module.exports = app;

//var express = require('express');
//const Register = require('../controllers/users.controllers');

//var router = express.Router();

/* GET home page. */
//router.post('/register', Register);

//module.exports = router;

