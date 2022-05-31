const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    user: {type: objectId, ref: "user"}
},{
    timestamps: true,
});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;