const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  getLoggedInUser,
} = require("../controllers/auth");
const authenticate = require("../middlewares/auth");
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/loggedin-user", authenticate, getLoggedInUser);

module.exports = router;
