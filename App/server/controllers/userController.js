const User = require("../models/userModel");
const emailController = require("../controllers/emailController");
const validation = require("../middleware/validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

async function getUser(req, res) {
  const user = req.user;
  try {
    res.json({
      name: user.name,
      email: user.email,
      gender: user.sex,
      profileImg: user.profileImg,
      work: user.work,
      phone: user.phone,
      description: user.description,
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
    });

    emailController.createAndSendMail(
      user,
      email,
      `${process.env.HOST}/confirm?token=`,
      "Bevestig email",
      "Klik op deze link om je email te verifi&euml;ren: "
    );

    res.end();
  } catch (err) {
    console.log(err);
    if ((err.code = 11000)) {
      return res.send({
        errorMessage: "De email die u heeft opgegeven is al in gebruik",
      });
    } else {
      console.log(err.code);
    }
  }
}

async function login(req, res) {
  const { email, password } = req.body;

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

async function edit(req, res) {
  try {
    const user = req.user;
    const { name, work, phone, description } = req.body;

    const filledIn = await validation.isFilledIn({
      "je volledige naam": name,
    });

    if (filledIn) {
      if (req.file) {
        fs.unlinkSync(
          path.join(__dirname, `../tmp/uploads/images/${req.file.filename}`)
        );
      }
      return res.send({ errorMessage: filledIn });
    }

    if (req.file) {
      if (user.profileImg !== "") {
        fs.unlinkSync(
          path.join(__dirname, `../tmp/uploads/images/${user.profileImg}`)
        );
      }
      await User.findByIdAndUpdate(user.id, {
        name,
        work,
        phone,
        description,
        profileImg: req.file.filename,
      });
      res.send(req.file.filename);
    } else {
      await User.findByIdAndUpdate(user.id, {
        name,
        work,
        phone,
        description,
      });
      res.end();
    }
  } catch (e) {
    console.log(e);
  }
}

async function profileImg(req, res) {
  try {
    if (req.params.filename != "undefined" && req.params.filename != "") {
      res.setHeader("Content-Type", "image");
      res.sendFile(
        path.join(__dirname, `../tmp/uploads/images/${req.params.filename}`)
      );
    }
  } catch (e) {
    res.end();
  }
}

async function forgetReq(req, res) {
  try {
    const { email } = req.body;

    const filledIn = await validation.isFilledIn({ email });

    if (filledIn) {
      return res.send({ errorMessage: filledIn });
    }

    const user = await User.findOne({ email });

    if (!user) return res.end();

    emailController.createAndSendMail(
      user,
      email,
      `${process.env.HOST}/herstelwachtwoord?token=`,
      "Herstel wachtwoord",
      "Via deze link kan je je wachtwoord herstellen: "
    );

    res.end();
  } catch (error) {
    console.log(error);
  }
}

async function recoverPassword(req, res) {
  const { user, password, passwordRepeat } = req.body;

  const userInDB = await User.findById(user);

  const filledIn = await validation.isFilledIn({
    wachtwoord: password,
    "wachtwoord herhalen": passwordRepeat,
  });

  if (filledIn) res.send({ errorMessage: filledIn });

  const passwordSame = bcrypt.compareSync(password, userInDB.passwordHash);

  if (passwordSame) {
    return res.send({
      errorMessage: "wachtwoord kan niet hetzelfde zijn als huidige wachtwoord",
    });
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

  await User.findByIdAndUpdate(user, { passwordHash });

  res.end();
}

module.exports = {
  register,
  login,
  getUser,
  logout,
  edit,
  profileImg,
  forgetReq,
  recoverPassword,
};
