//CRUD operation with HUSH-> user Secrets
const express = require('express');
const router = express.Router();

//@description GatherAll  hush
//@routes get->secrete/hush/
//@acces Public
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Getting all Secretes  😊',
  });
});
router.post('/', (req, res) => {
  res.status(200).json({
    message: 'Creating Hush!! 😎',
  });
});

//@description update hush
//@routes put->secrete/hush/ID
//@acces Private
router.put('/:id', (req, res) => {
  res.status(200).json({
    message: 'Making Changes to Hush 😇',
  });
});
//@description delete hush
//@routes delete->secrete/hush/ID
//@acces Private
router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: 'Deleting all Hush 😔',
  });
});

module.exports = router;
