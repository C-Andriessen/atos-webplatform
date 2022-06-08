const Job = require("../models/jobModel");

async function createJob(res, req){

    await Job.create({
        title: req.title,
        user: req.user._id,
        content: req.content,
        //acceptedStudent: //empty string,
        //declinedStudent: //empty array,       
    })
    res.end();
}

module.exports = createJob;