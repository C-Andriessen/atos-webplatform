import checkRole from "../middleware/checkRole";
import Job from "../models/jobModel";
const job = await Job.findById()

async function accept(req, res){
    // put student in accepted student and remove it from open jobs 
    if(checkRole.roles == Student){
        job.acceptedStudent.push(req.user._id);
    }
}

async function decline(req, res){
    // put student in declined student and move it to declined items of student 
    if(checkRole.roles == Student){
        job.declinedStudent.push(req.user._id);
    }
}

module.exports = {
    accept,
    decline,
}