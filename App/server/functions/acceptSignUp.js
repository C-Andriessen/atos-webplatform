import checkRole from "../middleware/checkRole";
import Pending from "../models/roles/pendingModel";
import Student from "../models/roles/studentModel";

async function accept(){
    const pendingUser; //the id of the user in the form
    const pending = await Pending.findById();
    if(checkRole.roles == Teacher){
        if(){
            //accepted
            await Student.create({
                user: pending.user._id,
                school: pending.school,
                education: pending.education,
                studentId: pending.studentId,
            });
        }else{
            //declined
            return
        }
    }else{
        return;
    }
    //remove pending role
}

module.exports = accept;