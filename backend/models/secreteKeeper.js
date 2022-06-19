const mongoose = require('mongoose');

const secreteKeeper = mongoose.Schema(
  {
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
