const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Our Secrete Server is Running 😎');
});
app.use('/kesh', (req, res) => {
  res.send('its working');
});
app.use('/secrete/hush', require('./routes/secreteRoutes'));
