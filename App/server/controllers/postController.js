const validation = require("../middleware/validation");
const fs = require("fs");
const path = require("path");
const Post = require("../models/postModel");

async function createPost(req, res) {
  const { title, description, content } = req.body;

  if (!req.file) {
    res.send({ errorMessage: "Een afbeelding toevoegen is verplicht" });
  }

  const filledIn = await validation.isFilledIn({
    Titel: title,
    "Korte beschrijving": description,
    "Volledige beschrijving": content,
  });

  if (filledIn) {
    if (req.file) {
      fs.unlinkSync(
        path.join(__dirname, `../tmp/uploads/images/${req.file.filename}`)
      );
    }
    return res.send({ errorMessage: filledIn });
  }

  await Post.create({
    title,
    description,
    content,
    user: req.user._id,
    image: req.file.filename,
  });

  res.end();
}

async function getAllPosts(req, res) {
  const posts = await Post.find().populate("user").exec();
  res.send(posts);
}
async function getImage(req, res) {
  res.sendFile(
    path.join(__dirname, `../tmp/uploads/images/${req.params.filename}`)
  );
}

async function getPost(req, res) {
  try {
    const post = await Post.findById(req.params.id).populate("user").exec();
    res.send(post);
  } catch (e) {
    res.end();
  }
}

module.exports = { createPost, getAllPosts, getImage, getPost };
