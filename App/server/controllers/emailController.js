const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const nodemailer = require("nodemailer");

async function confirmEmail(req, res) {
  try {
    const { user } = jwt.verify(req.params.token, process.env.EMAIL_SECRET);
    await User.findByIdAndUpdate(user, { active: true });
    res.end();
  } catch (e) {
    res.send("invalid");
  }
}

async function recoverEmail(req, res) {
  try {
    const { user } = jwt.verify(req.params.token, process.env.EMAIL_SECRET);
    const userInDB = await User.findById(user);
    res.send(userInDB);
  } catch {
    res.send("invalid");
  }
}

function createAndSendMail(user, email, url, subject, message) {
  try {
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        type: "OAUTH2",
        user: process.env.GMAIL_USER,
        clientId:
          "1013134914786-kisfdakt43de8nkm3udffhoegott4sjq.apps.googleusercontent.com",
        clientSecret: "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",
        accessToken: "832UEJWDKNSDBVFUERHFIKJ-FJEWDHJFHEJKWDS-FBDJSBNFJDBSJFSD",
      },
    });

    const emailToken = jwt.sign(
      {
        user: user._id,
      },
      process.env.EMAIL_SECRET
    );

    url = `${url}${emailToken}`;

    transporter.sendMail({
      to: email,
      subject: subject,
      html: `${message} <a href="${url}">${url}</a>`,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  confirmEmail,
  createAndSendMail,
  recoverEmail,
};
