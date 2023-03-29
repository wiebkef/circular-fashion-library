const express = require("express");
const itemsRouter = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");
const itemFinder = require("../middlewares/itemFinder");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

//itemsRouter.post("/", createItem);
itemsRouter.post("/", upload.single("images"), createItem);
itemsRouter.get("/", getAllItems);
itemsRouter.get("/:id", itemFinder, getItemById);
itemsRouter.put("/:id", itemFinder, updateItem);
itemsRouter.delete("/:id", itemFinder, deleteItem);

module.exports = itemsRouter;
