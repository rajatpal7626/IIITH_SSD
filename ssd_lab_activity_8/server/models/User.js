const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  rollno: { type: String, required: true },
  password: { type: String, required: true },
  role: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;
