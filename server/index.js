require("dotenv/config");
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const path = require("path");
const PORT = process.env.PORT || 8000;
const app = express();
const usersRouter = require("./routes/users");

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);

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
