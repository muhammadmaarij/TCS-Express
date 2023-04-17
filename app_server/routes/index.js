var express = require("express");
var router = express.Router();
var mainCont = require("../controllers/main");

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "BCS-6B" }); //render -> utilization of view engine here jade
// });

/* GET home page. */
router.get("/", mainCont.index);

/* GET index home page. */
router.get("/home", mainCont.home);

module.exports = router;
