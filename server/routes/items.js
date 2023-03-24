const express = require("express");
const itemsRouter = express.Router();
const { getAllItems, getItemById } = require("../controllers/items");

itemsRouter.get("/", getAllItems);
itemsRouter.get("/:id", getItemById);

module.exports = itemsRouter;
