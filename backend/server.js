//The sequence of each method should be same as below.

const express = require('express');
const connectDB = require('./config database/db');
const { expressErrorHandler } = require('./middleware/expressErrorHandler');
const dotenv = require('dotenv').config();
const color = require('colors');

//connection to mongodb atlas
connectDB();

const app = express();
const port = process.env.PORT || 5000;

//Initializing server
app.listen(port, () => {
  console.log('Our Secrete Server is Running 😎');
});

//Body parse and urlencoded-false @express
app.use(express.json());
//char to ASCII-false
app.use(express.urlencoded({ extended: false }));

//Defined routes for hush
app.use('/secrete/hush', require('./routes/secreteRoutes'));

//Defined routes for user
app.use('/secrete/users', require('./routes/userRoutes'));

//Middleware for ExpressErrorHandle
app.use(expressErrorHandler);
