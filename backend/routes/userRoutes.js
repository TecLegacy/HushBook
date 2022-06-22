const express = require('express');
const { protect } = require('../middleware/protectedRoutes');
const router = express.Router();
const {
  getMe,
  registerUser,
  loginUser,
} = require('../controller/userController');

//Get user info
router.get('/me', protect, getMe);

//To Register new user
router.post('/', registerUser);

//Login in user
router.post('/login', loginUser);

module.exports = router;
