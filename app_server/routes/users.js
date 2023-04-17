var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* GET users home listing. */
router.get("/home", function (req, res, next) {
  res.send("users home");
});

module.exports = router;
