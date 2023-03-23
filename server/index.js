require("dotenv/config");
const express = require("express");
const cors = require("cors");
//const connectDB = require("./config/db");
const usersRouter = require("./routes/users");
const PORT = process.env.PORT || 8000;
const app = express();
const { connectDB } = require("./config/db");
app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
