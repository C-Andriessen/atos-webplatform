const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = require("express").Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/", auth, userController.getUser);

module.exports = router;
