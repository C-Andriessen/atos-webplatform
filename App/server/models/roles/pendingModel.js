const mongoose = require("mongoose");

const pendingSchema = new mongoose.Schema({
    user: {type: objectId, ref: "user"},
    school: {type: String, required: true},
    education: {type: String, required: true},
    studentId: {type: String, required: true},
},{
    timestamps: true,
});

const Pending = mongoose.model("pending", pendingSchema);

module.exports = Pending;