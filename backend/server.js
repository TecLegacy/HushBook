//The sequence of each method should be same as below.

const express = require('express');
const connectDB = require('./config database/db');
const { expressErrorHandler } = require('./middleware/expressErrorHandler');
const dotenv = require('dotenv').config();
const color = require('colors');

const app = express();
const port = process.env.PORT || 5000;

//Initializing server
app.listen(port, () => {
  console.log('Our Secrete Server is Running 😎');
});

//Body parse and urlencoded-false @express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Define routes for hush
app.use('/secrete/hush', require('./routes/secreteRoutes'));

//Middleware for ExpressErrorHandle
app.use(expressErrorHandler);

//connection to mongodb atlas
connectDB();
