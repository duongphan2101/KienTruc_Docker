const express = require("express");

const app = express();
const PORT = 3000;

console.log("Starting server...");

app.get("/", (req, res) => {
  res.send("Hello, Docker!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

