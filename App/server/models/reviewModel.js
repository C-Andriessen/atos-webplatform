const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const reviewSchema = new mongoose.Schema({
    poster: {type: objectId, ref: "user"},
    review: {type: String, required: true},
    postedOn: {type: objectId, ref: "user"},
},{
    timestamps: true,
});

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;