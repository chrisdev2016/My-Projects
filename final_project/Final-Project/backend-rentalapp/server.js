const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// connecting to db
mongoose.connect('mongodb://localhost:27017/rentalapp');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to db at localhost 27017")
});


// seeding the db
// const seedDealerships = require('./seeds/dealerships');
// const seedCars = require('./seeds/cars');
// seedDealerships();
// seedCars();

// getting models in
const User= require('./models/User').model;
const Property = require('./models/Property').model;


// getting the routes
const userRoute = require('./Routes/usersRoute')
const propertiesRoute = require('./Routes/propertiesRoute')
const PORT = process.env.PORT || 8080;

// connect through middleware
app.use('/', userRoute)
app.use('/', propertiesRoute)

// server listening on
app.listen(PORT, () => {
    console.log('SERVER RUNNING ON ' + PORT);
})





