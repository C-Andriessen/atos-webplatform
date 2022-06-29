const postController = require("../controllers/postController");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload_image");

const router = require("express").Router();

router.post(
  "/create",
  [auth, upload.single("file")],
  postController.createPost
);
router.get("/getAll", postController.getAllPosts);
router.get("/image/:filename", postController.getImage);
router.get("/single/:id", postController.getPost);

module.exports = router;
