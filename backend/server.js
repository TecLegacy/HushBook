//The sequence of each method should be same as below.

const express = require('express');
const { expressErrorHandler } = require('./middleware/expressErrorHandler');
const dotenv = require('dotenv').config();

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
