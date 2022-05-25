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

async function login(req, res){
  const{name, password} = req.body;

    if(!name || !password){
        return res.status(400).json({
          errorMessage: "Vul alle velden in",
        });
    }

    const userInDB = await User.findOne({name});

    if(!userInDB){
      return res.status(400).json({
        errorMessage: "Gebruiker niet bekend",
      });
    }

    const passwordCorrect = bcrypt.compareSync(password, userInDB.passwordHash);

    if(!passwordCorrect){
        return res.status(400).json({
            errorMessage: "Verkeerde wachtwoord",
        });
    }

    const token = jwt.sign({
      id: userInDB._id
    },
      process.env.JWT_SECRET
    );

    res.cookie("auth-token", token,{
      httpOnly: true,
    }).redirect("/");
}

module.exports = {
    register,
    login,
}