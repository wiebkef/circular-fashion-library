const express = require("express");
const itemsRouter = express.Router();
const { getAllItems, getItemById } = require("../controllers/items");

const itemFinder = require("../middlewares/itemFinder");

itemsRouter.get("/", getAllItems);
itemsRouter.get("/:id", itemFinder, getItemById);

module.exports = itemsRouter;
