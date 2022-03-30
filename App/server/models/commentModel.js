const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const commentSchema = new mongoose.Schema({
    post: {type: objectId, ref: "post"},
    comment: {type: String, required: true},
    poster: {type: objectId, ref: "user"},
},{
    timestamps: true,
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;