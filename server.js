const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const port = process.env.PORT | 3002;

app.use(express.static(path.join(__dirname, "shope")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "shope/index.html"));
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log("Shope app running... \nport : " + port);
});
