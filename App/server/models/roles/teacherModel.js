const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const teacherSchema = new mongoose.Schema({
    students: [{type: objectId, ref: "student"}],
    user: {type: objectId, ref: "user"}
},{
    timestamps: true,
});

const Teacher = mongoose.model("teacher", teacherSchema);

module.exports = Teacher;