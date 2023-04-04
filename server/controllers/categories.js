const Category = require("../models/category");
const ErrorResponse = require("../utils/errorResponse");

const createCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategoryById = async (req, res, next) => {
  res.json(req.reqCategory);
};

const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      },
      { returning: true } /*
      {
        new: true,
        runValidators: false,
      } */
    );
    console.log(updatedCategory);
    res.json(updatedCategory);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletedCategory);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
