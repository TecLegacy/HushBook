const mongoose = require('mongoose');
const expressAsyncHandler = require('express-async-handler');

const connectDB = expressAsyncHandler(async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);

    //on faliure exit-1
    process.exit(1);
  }
});

module.exports = connectDB;
