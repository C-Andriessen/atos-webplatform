import Job from "../models/jobModel";
import auth from "../middleware/auth";
const job = await Job.findById();

async function updateJob(req, res){
    if(job.user._id == auth){
        job.title.update(req.title);
        job.content.update(req.content);
    }
    res.end();
}

module.exports = updateJob;