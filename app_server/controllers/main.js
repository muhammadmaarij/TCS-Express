module.exports.index = function (req, res, next) {
  res.render("index", { title: "BCS-6B" }); //render -> utilization of view engine here jade
};

module.exports.home = function (req, res, next) {
  res.send("Will display home page"); //render -> utilization of view engine here jade
};
