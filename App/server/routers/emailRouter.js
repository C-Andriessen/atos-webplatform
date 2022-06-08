const emailController = require("../controllers/emailController.js");

const router = require("express").Router();

router.get("/confirmation/:token", emailController.confirmEmail);
router.post("/recover/:token", emailController.recoverEmail);

module.exports = router;
