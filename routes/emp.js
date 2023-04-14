var express = require("express");
var router = express.Router();

//GET routes
router.get("/", function (req, res, next) {
  res.send("Dashboard of employee");
});

router.get("/list", function (req, res, next) {
  res.send("List of employee");
});

router.get("/list/:id", function (req, res, next) {
  res.send(req.params.id);
});

//POST routes
router.post("/list", function (req, res, next) {
  res.send("List of employee");
});

module.exports = router;
