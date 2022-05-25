const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    passwordHash: { type: String, required: true },
    sex: { type: String, required: true },
    profileImg: { type: String, default: "" },
    description: { type: String, default: "" },
    work: { type: String, default: "" },
    phone: { type: String, default: "" },
    active: { type: String, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
