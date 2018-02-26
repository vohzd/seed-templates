// standard expressjs server with socket.io bindings
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");
//const config = require("./config.js");
const db = require("../database/database.js");
app.set("port", (process.env.PORT || 1337));

app.get("*", (req, res) => {
  res.send("app is running....");
});

console.log(db)

http.listen(app.get("port"), () => {
  console.log(`listening on ${app.get("port")}`);
});
