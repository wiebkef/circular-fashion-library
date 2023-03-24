const express = require("express");
const itemsRouter = express.Router();
const { getAllItems } = require("../controllers/items");

itemsRouter.get("/", getAllItems);

module.exports = itemsRouter;
