const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const jobSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    user: {type: objectId, ref: "user"},
    acceptedStudent: {type: objectId, ref: "user"},
    declinedStudent: [{type: objectId, ref: "user"}],
},{
    timestamps: true,
});

const Job = mongoose.model("post", jobSchema);

module.exports = Job;