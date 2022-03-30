const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    poster: {type: objectId, ref: "user"},
    likes: [{type: objectId, ref: "user"}]
},{
    timestamps: true,
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;