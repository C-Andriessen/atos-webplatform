const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const studentSchema = new mongoose.Schema({
    school: {type: objectId, ref: "school"},
    education: {type: objectId, ref: "education"},
    user: {type: objectId, ref: "user"},
    studentNumber: {type: String, required: true},
},{
    timestamps: true,
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;