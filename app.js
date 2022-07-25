const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();


// EXPRESS SESSION SECTION
const expressSession = require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
});  

// Routing section
const homeRoutes = require('./routes/homeroutes');
const registerRoutes = require('./routes/userregisterroutes');
const salesRoutes = require('./routes/salesroutes');
const procurementRoutes = require('./routes/procurementroutes');
const creditRoutes = require('./routes/creditsalesroutes');
const role = require('./routes/role');

// Models section
const config = require("./config/database");
const Userregister = require("./models/Userregister");


// Server initialization
const app = express();

// Mongoose Setup
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', function(){
    console.log('Connected to Mongodb');
});

db.on('error', function(err){
    console.error(err);
}); 

// View engine setup
app.set('view engine', 'pug');
app.set('views', './views');

// Publishing the static files path
app.use(express.static(path.join(__dirname, 'public'))); 

// setting the middleware to handle our form data
app.use(express.urlencoded({extended: true}));
app.use(expressSession);

// Passport middleware configuration
passport.use(Userregister.createStrategy());
passport.serializeUser(Userregister.serializeUser());
passport.deserializeUser(Userregister.deserializeUser());

// Setting routes
app.use('/', homeRoutes);
app.use('/register', registerRoutes);
app.use('/sales', salesRoutes);
app.use('/procurement', procurementRoutes);
app.use('/creditpayments', creditRoutes);
app.get('/nonuser', (req, res)=>{
    res.render('nonuserform')
})

// Non existent routes hanlding
app.get('*', (req, res)=> {
    res.status(404).send('Server effudde! Wrong turn')
  })


// Listening port configuration
app.listen(30700, () => console.log("Listening on Port 30700"));