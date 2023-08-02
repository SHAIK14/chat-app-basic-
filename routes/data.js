const path = require("path");
const fs = require("fs");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "data.html"));
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const message = req.body.data;
  const username = fs.readFileSync("username.txt", "utf8").trim();
  const formattedMessage = `${username}: ${message}\n`;

  fs.appendFile("data.txt", formattedMessage, (err) => {
    if (err) {
      console.error("Error appending message:", err);
      return res.sendStatus(500);
    }

    res.sendStatus(200);
  });
});

module.exports = router;
