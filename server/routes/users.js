const express = require("express");
const usersRouter = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/users");
const userFinder = require("../middlewares/userFinder");

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", userFinder, getUserById);

//usersRouter.post("/", createUser);

usersRouter.put("/:id", userFinder, updateUser);

usersRouter.delete("/:id", userFinder, deleteUser);

module.exports = usersRouter;
