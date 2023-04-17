var Student = require("../models/Student");

module.exports.dashboard = function (req, res, next) {
  res.send("Dashboard of employee");
};
module.exports.list = function (req, res, next) {
  Student.find({})
    .exec()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      next(err);
    });
};
module.exports.emp = function (req, res, next) {
  //   Student.find({name: req.param.id}).exec(function (err, data) {
  //     if (err) throw err;
  //     res.json(data);
  //   });
  res.send(req.params.id);
};
