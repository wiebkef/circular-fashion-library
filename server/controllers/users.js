const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log("All users:", JSON.stringify(users, null, 2));
  } catch {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllUsers };
