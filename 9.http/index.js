const http = require("http");
const fs = require("fs");
const url = require("url");
const game = require("./game");

http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/favicon.ico") {
      res.writeHead(200);
      res.end();
      return;
    }

    if (parsedUrl.pathname === "/game") {
      const playerAction = parsedUrl.query.action;
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
    }

    if (parsedUrl.pathname === "/") {
      fs.createReadStream(__dirname + "/index.html").pipe(res);
    }
  })
  .listen(3000);
