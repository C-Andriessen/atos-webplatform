const User = require("../models/userModel");
const emailController = require("../controllers/emailController");
const validation = require("../middleware/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getUser(req, res) {
  const user = req.user;
  try {
    res.json({
      name: user.name,
      email: user.email,
      gender: user.sex,
      profileImg: user.profileImg,
    });
  } catch (err) {
    console.log(err);
  }
}

async function register(req, res) {
  try {
    const { name, email, password, passwordRepeat, sex } = req.body;

    const filledIn = await validation.isFilledIn({
      email,
      naam: name,
      wachtwoord: password,
      "wachtwoord bevestigen": passwordRepeat,
      geslacht: sex,
    });

    if (filledIn) {
      return res.send({ errorMessage: filledIn });
    }

    const passwordEqual = await validation.passwordEqual(
      password,
      passwordRepeat
    );

    if (passwordEqual) {
      return res.send({ errorMessage: passwordEqual });
    }

    const passwordLength = await validation.passwordLength(password, 6);

    if (passwordLength) {
      return res.send({ errorMessage: passwordLength });
    }

    const passwordHash = await bcrypt.hash(password, await bcrypt.genSalt());

    const user = await User.create({
      name,
      email,
      passwordHash,
      sex,
      active: false,
      profileImg: "",
    });

    emailController.createAndSendMail(user, email);

    res.end();
  } catch (err) {
    console.log(err);
    if ((err.code = 11000)) {
      return res.status(400).json({
        errorMessage: "De email die u heeft opgegeven is al in gebruik",
      });
    } else {
      console.log(err.code);
    }
  }
}

async function login(req, res) {
  const { email, password, remember } = req.body;

  console.log(remember);

  const filledIn = await validation.isFilledIn({ email, wachtwoord: password });

  if (filledIn) return res.send({ errorMessage: filledIn });

  const user = await User.findOne({ email });

  if (!user)
    return res.send({ errorMessage: "Gebruikersnaam of wachtwoord incorrect" });

  const passwordCorrect = bcrypt.compareSync(password, user.passwordHash);

  if (!passwordCorrect)
    return res.send({ errorMessage: "Gebruikersnaam of wachtwoord incorrect" });

  if (!user.active)
    return res.send({
      errorMessage: "De email van dit account is nog niet geactiveerd",
    });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res
    .cookie("auth-token", token, {
      httpOnly: true,
    })
    .end();
}

function logout(req, res) {
  res.clearCookie("auth-token").end();
}

module.exports = {
  register,
  login,
  getUser,
  logout,
};
