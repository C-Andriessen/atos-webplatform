const userController = require("../controllers/userController");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload_image");

const router = require("express").Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/update", [auth, upload.single("file")], userController.edit);
router.get("/profileimg/:filename", userController.profileImg);
router.get("/", auth, userController.getUser);

module.exports = router;
