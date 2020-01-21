const fs = require("fs");
const express = require("express");
const game = require("./game");

const app = express();

app.get("/favicon.ico", (req, res) => {
  res.status(200);
});

app.get("/", (req, res) => {
  res.send(fs.readFileSync(__dirname + "/index.html", "utf-8"));
});

app.get("/game", (req, res) => {
  const playerAction = req.query.action;
  const gameResult = game(playerAction);

  res.writeHead(200, {
    "Content-Type": "text/plain;charset=UTF-8"
  });
  if (gameResult === 0) {
    res.end("平局！");
  } else if (gameResult === 1) {
    res.end("你赢了！");
  } else {
    res.end("你输了！");
  }
});

app.listen(3000);
