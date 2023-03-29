const express = require("express");
const categoriesRouter = express.Router();
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories");

const categoryFinder = require("../middlewares/categoryFinder");

categoriesRouter.post("/", createCategory);

categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/:id", categoryFinder, getCategoryById);

categoriesRouter.put("/:id", categoryFinder, updateCategory);

categoriesRouter.delete("/:id", categoryFinder, deleteCategory);

module.exports = categoriesRouter;
