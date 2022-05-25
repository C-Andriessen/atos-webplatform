const Admin = require("../models/roles/adminModel");
const School    = require("../models/roles/schoolModel");
const Student   = require("../models/roles/studentModel" );
const Teacher   = require("../models/roles/teacherModel");
const Pending = require("../models/roles/pendingModel");

var roles = [];

async function checkRole(req){

    if(Admin.findById(req.user._id)){
        roles.push(Admin);
    }
    if(School.findById(req.user._id)){
        roles.push(School);
    }
    if(Student.findById(req.user._id)){
        roles.push(Student);
    }
    if(Teacher.findById(req.user._id)){
        roles.push(Teacher);
    }
    if(Pending.findById(req.user._id)){
        roles.push(Pending);
    }

    return roles;
}

module.exports = {
    checkRole,
}