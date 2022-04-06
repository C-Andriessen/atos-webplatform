const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const schoolSchema = new mongoose.Schema({
    schoolName: {type: String, required: true},
    students: [{type: objectId, ref: "user"}],
    educations: [{type: objectId, ref: "education"}],
    schoolAdres: {type: String, required: true}
},{
    timestamps: true,
})

const School = mongoose.model("school", schoolSchema);

module.exports = School;