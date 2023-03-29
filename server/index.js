require("dotenv/config");
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8000;
const app = express();
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const itemsRouter = require("./routes/items");
const errorHandler = require("./middlewares/errorHandler");
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/items", itemsRouter);

// errorHandler is middleware for all routes
app.use(errorHandler);

/* joining and normalizing paths for deployment */
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../client/build");
  app.use(express.static(buildPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
