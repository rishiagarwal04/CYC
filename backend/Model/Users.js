const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    birthday: {
      type: Date,
      default: Date.now,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Other",
    },
    contact: {
      type: String,
      match: [/^\d{10}$/, "Please enter a valid contact number"],
    },
    qualification: {
      type: String,
      enum: [
        "High School",
        "Diploma",
        "Undergraduate",
        "Postgraduate",
        "Doctorate",
        "10th Grade",
        "9th Grade",
      ],
      // required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
