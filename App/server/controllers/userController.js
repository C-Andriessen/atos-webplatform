const User = require('../models/userModel');
const Role = require('../models/roleModel');
const validation = require('../middleware/validation')
const bcrypt = require('bcryptjs');

async function register(req, res) {
    try{
    const {name, email, password, passwordRepeat } = req.body;

      const filledIn = await validation.isFilledIn({'naam': name, email, 'wachtwoord': password, 'wachtwoord bevestigen': passwordRepeat});

      if (filledIn) {
        return res.status(400).json({
          errorMessage: filledIn,
        });
      }

      const passwordEqual = await validation.passwordEqual(password, passwordRepeat);

      if (passwordEqual) {
        return res.status(400).json({
          errorMessage: passwordEqual,
        });
      }

      const passwordLength = await validation.passwordLength(password, 6);
      
      if(passwordLength) {
        return res.status(400).json({
          errorMessage: passwordLength,
        });
      }

const passwordHash = await bcrypt.hash(password, await bcrypt.genSalt());

const role = await Role.findOne({name: "VISITOR"}).exec();

await User.create({
    name,
    email,
    passwordHash,
    role: role._id,
    // active: false,
});


res.redirect('/');

    } catch(err) {
        console.log(err);
      if(err.code = 11000) {
        return res.status(400).json({
          errorMessage: "De email die u heeft opgegeven is al in gebruik",
        });
      } else {
        console.log(err.code);
      }
}
}

module.exports = {
    register,
}