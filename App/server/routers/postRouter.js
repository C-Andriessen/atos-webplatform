const postController = require("../controllers/postController");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload_image");

const router = require("express").Router();

router.post(
  "/create",
  [auth, upload.single("file")],
  postController.createPost
);

module.exports = router;
