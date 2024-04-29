const express = require("express");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_SECRET, { expiresIn: "3d" });
};

module.exports = generateToken;
