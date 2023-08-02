const path = require("path");
const fs = require("fs");
const express = require("express");
const router = express.Router();
router.get("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
});
router.post("/login", (req, res, next) => {
  console.log(req.body);
  const message = req.body.title;
  fs.writeFileSync("username.txt", message);
  res.redirect("/");
});

module.exports = router;
