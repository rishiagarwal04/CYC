const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },

    interest: {
      type: [String],
      required: true,
      minlength: 3,
      maxlength: 30,
    },
    courses_done: {
      type: [String],
      required: true,
      minlength: 8,
    },
    current_skillset: {
      type: [String],
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    your_future_goal: {
      type: String,
      default: "Other",
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
