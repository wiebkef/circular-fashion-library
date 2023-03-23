const express = require("express");
const usersRouter = express.Router();
const { getAllUsers } = require("../controllers/users");

usersRouter.get("/", (req, res) => res.send("Hello World!"));

module.exports = usersRouter;
