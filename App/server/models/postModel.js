const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: objectId, ref: "user" },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;
