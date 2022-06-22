const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter Name!'],
    },
    email: {
      type: String,
      required: [true, 'Enter EmailId'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Enter Password'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
