const express = require('express');
const get = (req, res) => {
  res.status(200).json({
    message: 'Getting all Secretes  😊',
  });
};
const post = (req, res) => {
  res.status(200).json({
    message: 'Creating Hush! 😎',
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
