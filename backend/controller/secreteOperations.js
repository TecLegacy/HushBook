const Secretes = require('../models/secreteKeeper');
const express = require('express');

//To handle exception in middleware
const asyncHandler = require('express-async-handler');

//@descption Get hush
//@routes Get/secrete/hush
//@access private
const get = asyncHandler(async (req, res) => {
  // res.status(400).json({
  // message: 'Getting all Secretes  😊',
  // });

  //#getting secretes from mongoDB
  //req.user.id is set through middleware
  const secretes = await Secretes.find({ user: req.user.id });
  res.status(200).json(secretes);
});

//@descption Create hush
//@routes POST/secrete/hush
//@access private
const post = asyncHandler(async (req, res) => {
  //res.status(200).json({
  //  message: 'Creating Hush! 😎',
  //   text: data,
  // });

  //#check if user sent empty data
  if (!req.body.text) {
    res.status(200);
    throw new Error('please enter text');
  }

  //#Creating Secretes in mongoDB
  const createSecretes = await Secretes.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(createSecretes);
});

//@descption update hush
//@routes PUT/secrete/hush/:Id
//@access private
const put = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //   message: 'Making Changes to Hush 😇',
  // });

  const secrete = await Secretes.findById(req.params.id);

  if (!secrete) {
    res.status(400);
    throw new Error('Hush not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user matches the goal user
  if (secrete.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  //#Getting User ID and updating Secretes
  const ID = req.params.id;
  const updateSecretes = await Secretes.findByIdAndUpdate(ID, req.body, {
    new: true,
  });
  res.status(200).json(updateSecretes);
});

//@descption delete hush
//@routes Delete/secrete/hush/:ID
//@access private
const remove = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //   message: 'Deleting all Hush 😔',
  // });

  const secrete = await Secretes.findById(req.params.id);

  if (!secrete) {
    res.status(400);
    throw new Error('Hush not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user matches the goal user
  if (secrete.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  //# remove Secretes by id
  await secrete.remove();

  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = { get, remove, put, post };
