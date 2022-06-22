const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const protect = asyncHandler(async (req, res, next) => {
  let token;

  //check if token is sent with request header
  if (
    !req.headers.authorization &&
    !req.headers.authorization.startsWith('Bearer')
  ) {
    res.status(401);
    throw new Error('Not authorized');
  }
  try {
    //get token from header
    token = req.headers.authorization.split(' ')[1];

    //decode token
    const decode = jwt.verify(token, process.env.JWT_SECRETE);

    req.user = await User.findById(decode.id).select('-password');
    next();
  } catch (error) {
    console.log(console.log(error));
    res.status(401);
    throw new Error('Not valid token');
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

module.exports = { protect };
