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
router.get("/getuserposts", auth, postController.getUserPosts);
router.get("/get/:id", auth, postController.getPostUser);
router.post(
  "/update",
  [auth, upload.single("file")],
  postController.updatePost
);

router.post("/delete/", auth, postController.deletePost);

module.exports = router;
