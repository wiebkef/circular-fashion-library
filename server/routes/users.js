const express = require("express");
const usersRouter = express.Router();
const { getAllUsers, getUserById } = require("../controllers/users");
const userFinder = require("../middlewares/userFinder");

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", userFinder, getUserById);

module.exports = usersRouter;
