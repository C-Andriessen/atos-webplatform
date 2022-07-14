const validation = require("../middleware/validation");
const fs = require("fs");
const path = require("path");
const Post = require("../models/postModel");
const { findOne, findById } = require("../models/postModel");

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

async function getUserPosts(req, res) {
  const posts = await Post.find({ user: req.user._id }).populate("user").exec();
  res.send(posts);
}

async function getPostUser(req, res) {
  try {
    const post = await Post.findOne({ _id: req.params.id, user: req.user._id });
    res.send(post);
  } catch (e) {
    res.send("onbevoegd");
  }
}

async function updatePost(req, res) {
  try {
    const { title, description, content, id } = req.body;
    const post = await Post.findById(id);
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

    if (req.file) {
      fs.unlinkSync(
        path.join(__dirname, `../tmp/uploads/images/${post.image}`)
      );
      await Post.findOneAndUpdate(
        { _id: id, user: req.user._id },
        {
          title,
          description,
          content,
          image: req.file.filename,
        }
      );
    } else {
      await Post.findOneAndUpdate(
        { _id: id, user: req.user._id },
        {
          title,
          description,
          content,
        }
      );
    }
    res.end();
  } catch (e) {
    res.end();
  }
}

async function deletePost(req, res) {
  const { id } = req.body;
  const post = await Post.findByIdAndDelete(id);
  fs.unlinkSync(path.join(__dirname, `../tmp/uploads/images/${post.image}`));
  res.end();
}

module.exports = {
  createPost,
  getAllPosts,
  getImage,
  getPost,
  getUserPosts,
  getPostUser,
  updatePost,
  deletePost,
};
