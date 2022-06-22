//CRUD operation with HUSH-> user Secrets
const express = require('express');
const router = express.Router();

const { get, remove, put, post } = require('../controller/secreteOperations');

//auth middleware for hush
const { protect } = require('../middleware/protectedRoutes');

//@description GatherAll  hush
//@routes get->secrete/hush/
//@acces Public
router.get('/', protect, get);

//@description create a hush
//@routes get->secrete/hush/
//@acces Public
router.post('/', protect, post);

//@description update hush
//@routes put->secrete/hush/ID
//@acces Private
router.put('/:id', protect, put);

//@description delete hush
//@routes delete->secrete/hush/ID
//@acces Private
router.delete('/:id', protect, remove);

module.exports = router;
