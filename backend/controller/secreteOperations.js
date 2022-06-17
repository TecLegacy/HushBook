const express = require('express');

const get = (req, res) => {
  res.status(400).json({
    message: 'Getting all Secretes  😊',
  });
};

const post = (req, res) => {
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
};

const put = (req, res) => {
  res.status(200).json({
    message: 'Making Changes to Hush 😇',
  });
};

const remove = (req, res) => {
  res.status(200).json({
    message: 'Deleting all Hush 😔',
  });
};
module.exports = { get, remove, put, post };
