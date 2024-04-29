const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    // console.log("yaha aaya tha");
    try {
      if (token) {
        const decode = jwt.verify(token, process.env.jwt_SECRET);
        const user = await User.findById(decode?.id);
        req.user = user;

        next();
      }
    } catch (error) {
      throw new Error(
        "Not Authorized token expired , Please login Again",
        error
      );
    }
  } else {
    throw new Error("No token attach to header");
  }
});

module.exports = { authMiddleware };
