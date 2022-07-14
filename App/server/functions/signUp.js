import checkRole from "../middleware/checkRole";
const Pending = require("../models/roles/pendingModel");


async function signUp(req, res){
    const {school, education, studentId} = req.body;
    if(checkRole.roles == ""){

        await Pending.create({
            user: req.user._id,
            school: req.school,
            education: req.education,
            studentId: req.student,
        });
    }else{
        return;
    }
    res.end();
}

module.exports = signUp;