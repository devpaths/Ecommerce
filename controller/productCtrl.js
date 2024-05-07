const Product = require("../models/productModel");
const asynchandler = require("express-async-handler");
const slugify = require("slugify");

const createProduct = asynchandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }

  res.json({
    message: "ayoo brooooo",
  });
});

const getaProduct = asynchandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProduct = await Product.findById(id);
    res.json({ findProduct });
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProduct = asynchandler(async (req, res) => {
  try {
    const getAllProduct = await Product.find();
    res.json({ getAllProduct });
  } catch (error) {
    throw new Error(error);
  }
});

const updateProduct = asynchandler(async (req, res) => {
  const id = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findByIdAndUpdate(id);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = { createProduct, getaProduct, getAllProduct, updateProduct };
