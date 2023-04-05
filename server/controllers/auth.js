const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (req, res) => {
  if (req.body.password === req.body.confirmPassword) {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    try {
      const newUser = await User.create(req.body);
      const payload = {
        id: newUser.id,
        email: newUser.email,
      };
      const userToken = jwt.sign(payload, JWT_SECRET);
      const options = {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 1000), // 30 days
      };
      console.log("JWT TOKEN", userToken);
      res
        .status(201)
        .cookie("userToken", userToken, options)
        .json({ user: payload });
    } catch (error) {
      res.status(500).json({ message: error.message, errors: error.errors });
    }
  } else {
    res.status(403).json({
      message:
        "Passwords do not match. Please make sure that your password and the password confirmation are the same.",
    });
  }
};

const login = async (req, res) => {
  const userDocument = await User.findOne({ where: { email: req.body.email } });
  console.log("USER", req.body, userDocument);
  if (!userDocument) {
    res.status(400).json({ message: "Invalid login attempt" });
  } else {
    try {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userDocument.password
      );
      if (!isPasswordValid) {
        // if (req.body.password != userDocument.password) {
        res.status(400).json({ message: "Invalid login attempt 2" });
      } else {
        const payload = {
          id: userDocument.id,
          email: userDocument.email,
        };
        const userToken = jwt.sign(payload, JWT_SECRET);
        const options = {
          httpOnly: true,
          expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 1000), // 30 days
        };
        console.log("JWT TOKEN", userToken);
        res.cookie("userToken", userToken, options).json({ user: payload });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, errors: error.errors });
    }
  }
};

const logout = (req, res) => {
  res.clearCookie("userToken");
  res.json({ message: "You have successfully logged out" });
};

const getLoggedInUser = async (req, res) => {
  try {
    const currentUser = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: ["password"] },
    });
    res.json(currentUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  signup,
  login,
  logout,
  getLoggedInUser,
};
