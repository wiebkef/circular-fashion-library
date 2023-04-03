const express = require("express");
const itemsRouter = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  getWardrobe,
} = require("../controllers/items");
const itemFinder = require("../middlewares/itemFinder");
const userFinder = require("../middlewares/userFinder");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

//itemsRouter.post("/", createItem);
itemsRouter.post("/", upload.single("images"), createItem);
itemsRouter.get("/", getAllItems);
itemsRouter.get("/:id", itemFinder, getItemById);
itemsRouter.put("/:id", upload.single("images"), itemFinder, updateItem);
itemsRouter.delete("/:id", itemFinder, deleteItem);
itemsRouter.get("/wardrobe/:id", userFinder, getWardrobe);
module.exports = itemsRouter;
