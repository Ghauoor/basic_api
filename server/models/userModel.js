const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
