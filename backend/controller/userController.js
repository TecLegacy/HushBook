const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

// @desc to register user
// @route POST secrete/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  //check fields are empty
  if (!email || !password || !name) {
    res.status(400);
    throw new Error('Please Enter all Fields');
  }
  //check User Exist
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User Already Exist');
  }

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  //Create a new User
  const userCreated = await User.create({
    email,
    name,
    password: hashPassword,
  });

  //check if user is created
  if (userCreated) {
    res.status(200).json({
      _id: userCreated._id,
      email: userCreated.email,
      name: userCreated.name,
      token: tokenJWT(userCreated._id),
    });
  } else {
    res.status(400);
    throw new Error('User Data Invalid');
  }
});

// @desc to Login user
// @route POST secrete/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  // res.status(200).json({
  //   message: 'User logged In',
  // });

  //Destructure data from request
  const { email, password } = req.body;

  //User data check from request object
  if (!email || !password) {
    res.status(400);
    throw new Error('Please enter correct field');
  }

  const userCreated = await User.findOne({ email });

  //check if user enterted data is correct
  if (userCreated && bcrypt.compare(password, userCreated.password)) {
    res.status(200).json({
      _id: userCreated._id,
      email: userCreated.email,
      name: userCreated.name,
      token: tokenJWT(userCreated._id),
    });
  }
});

// @desc to register user
// @route POST secrete/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  //accesing user through middleware
  res.status(200).json(req.user);
});

//generate JWT
const tokenJWT = id => {
  return jwt.sign({ id }, process.env.JWT_SECRETE, {
    expiresIn: '30d',
  });
};

module.exports = { registerUser, getMe, loginUser };
