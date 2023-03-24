const User = require("../models/user");
const ErrorResponse = require("../utils/errorResponse");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.json(users);
    // console.log("All users:", JSON.stringify(users, null, 2));
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res, next) => {
  //console.log("AAAAAAA", req.reqItem);
  res.json(req.reqUser);
};

module.exports = { getAllUsers, getUserById };
