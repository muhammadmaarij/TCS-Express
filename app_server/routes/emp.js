var express = require("express");
var router = express.Router();
var empCont = require("../controllers/emp");

//GET routes
router.get("/", empCont.dashboard);

router.get("/list", empCont.list);

router.get("/list/:id", empCont.emp);

//POST routes
router.post("/list", function (req, res, next) {
  res.send("List of employee");
});

module.exports = router;
