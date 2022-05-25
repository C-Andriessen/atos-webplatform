const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const studentSchema = new mongoose.Schema({
    user: {type: objectId, ref: "user"},
    school: {type: objectId, ref: "school"},
    education: {type: objectId, ref: "education"},
    studentId: {type: String, required: true},
},{
    timestamps: true,
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;