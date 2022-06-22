import checkRole from "../middleware/checkRole";
import Pending from "../models/roles/pendingModel";
import Student from "../models/roles/studentModel";

async function accept(req, res){
    const pendingUser = req.pending;
    const pending = await Pending.findById();
    if(checkRole.roles == Teacher){
        //accepted
        await Student.create({
            user: pending.user._id,
            school: pending.school,
            education: pending.education,
            studentId: pending.studentId,
        });
    
        //remove pending role
        await Pending.deleteOne(pendingUser)
        return;
    }
}

async function decline(req, res){
    const pendingUser = req.pending;
    //declined
    if(checkRole.roles == Teacher){
        await Pending.deleteOne(pendingUser)
        return;
    }
}

module.exports = {
    accept,
    decline,
}