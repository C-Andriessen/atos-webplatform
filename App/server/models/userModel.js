const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    email:{type: String, required: true},
    name: {type: String, required: true},
    passwordHash: {type: String, required: true},
    posts: [{type: objectId, ref: "post"}]
},{
    timestamps: true,
    }
);

const User = mongoose.model("user", userSchema);

module.exports = User;