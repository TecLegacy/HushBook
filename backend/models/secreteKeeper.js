const mongoose = require('mongoose');
const User = require('../models/userModel');
const secreteKeeper = mongoose.Schema(
  {
    //config relationship between User and Hush
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please Enter!'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Secretes', secreteKeeper);
