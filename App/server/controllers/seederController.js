const Role = require('../models/roleModel');

async function roleSeeder(req, res) {
    await Role.create({name: "VISITOR"})
    await Role.create({name: "STUDENT"})
    await Role.create({name: "DOCENT"})
    await Role.create({name: "SCHOOL"})
    await Role.create({name: "BEHEERDER"})

    res.end();
}

module.exports = {
    roleSeeder,
}