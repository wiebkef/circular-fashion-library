require("dotenv/config");
const app = require("./src/app");
const { resolve } = require("path");

app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
