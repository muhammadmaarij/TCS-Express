//require mongoose
//make schema
//and export schema
// module.exports= mongoose.model('Student', StudentSchema)

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("students", StudentSchema);
