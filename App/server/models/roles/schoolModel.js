const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const schoolSchema = new mongoose.Schema({
    adres: {type: String},
    students: [{type: objectId, ref: "student"}],
    teachers: [{type: objectId, ref: "teacher"}],
    educations: [{type: objectId, ref: "education"}],
    user: {type: objectId, ref: "user"}
},{
    timestamps: true,
});

const School = mongoose.model("school", schoolSchema);

module.exports = School;