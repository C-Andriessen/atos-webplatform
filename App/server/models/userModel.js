const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    email:{type: String, required: true, unique: true},
    name: {type: String, required: true},
    passwordHash: {type: String, required: true},
    posts: [{type: objectId, ref: "post"}],
    reviews: [{type: objectId, ref: "review"}],
    comments: [{type: objectId, ref: "comment"}],
    image: {type: String},
},{
    timestamps: true,
    }
);

const User = mongoose.model("user", userSchema);

module.exports = User;