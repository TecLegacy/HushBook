const express = require('express');
const expressAsyncHandler = require('express-async-handler');
//@descption Get hush
//@routes Get/secrete/hush
//@access private
const get = expressAsyncHandler(async (req, res) => {
  res.status(400).json({
    message: 'Getting all Secretes  😊',
  });
});

//@descption Create hush
//@routes POST/secrete/hush
//@access private
const post = expressAsyncHandler(async (req, res) => {
  console.log(req.body.name);
  if (!req.body.name) {
    res.status(200);
    throw new Error('please enter name');
  }
  const data = req.body.name;
  res.status(200).json({
    message: 'Creating Hush! 😎',
    name: data,
  });
});

//@descption update hush
//@routes PUT/secrete/hush
//@access private
const put = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Making Changes to Hush 😇',
  });
});

//@descption delete hush
//@routes Delete/secrete/hush
//@access private
const remove = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Deleting all Hush 😔',
  });
});

module.exports = { get, remove, put, post };
