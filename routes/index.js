var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "BCS-6B" }); //render -> utilization of view engine here jade
});

/* GET index home page. */
router.get("/home", function (req, res, next) {
  res.send("Will display home page"); //render -> utilization of view engine here jade
});

module.exports = router;
