const User = require("../models/user");
const ErrorResponse = require("../utils/errorResponse");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.json(users);
    // console.log("All users:", JSON.stringify(users, null, 2));
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res, next) => {
  if (req.body.password === req.body.confirmPassword) {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      next(new ErrorResponse(error));
    }
  }
};

const getUserById = async (req, res, next) => {
  //console.log("AAAAAAA", req.reqItem);
  res.json(req.reqUser);
};

const updateUser = async (req, res, next) => {
  if (req.body.password === req.body.confirmPassword) {
    req.body.password = await bcrypt.hash(req.body.password, 8);
  }
  try {
    const updatedUser = await User.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      } /*
      {
        new: true,
        runValidators: false,
      } */
    );
    res.json(updatedUser);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletedUser);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
};
