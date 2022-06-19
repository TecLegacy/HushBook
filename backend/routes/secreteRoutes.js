//CRUD operation with HUSH-> user Secrets
const express = require('express');
const router = express.Router();

const { get, remove, put, post } = require('../controller/secreteOperations');

//@description GatherAll  hush
//@routes get->secrete/hush/
//@acces Public
router.get('/', get);

//@description create a hush
//@routes get->secrete/hush/
//@acces Public
router.post('/', post);

//@description update hush
//@routes put->secrete/hush/ID
//@acces Private
router.put('/:id', put);

//@description delete hush
//@routes delete->secrete/hush/ID
//@acces Private
router.delete('/:id', remove);

module.exports = router;
