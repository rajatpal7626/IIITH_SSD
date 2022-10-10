const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema = new Schema({
  exam_name:String,
  course_name:String,
  question_num:Number,
  ta_roll:String,
  std_roll:String,
  ta_comment:String,
  std_comment:String,
  IsActive:Boolean,
});

querySchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Query = mongoose.model("Query", querySchema);

module.exports = Query;
