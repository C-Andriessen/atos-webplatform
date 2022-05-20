const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const educationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    students: [{type: objectId, ref: "users"}]
},{
    timestamps: true,
})

const Education = mongoose.model("education", educationSchema);

module.exports = Education;