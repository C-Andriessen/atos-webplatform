async function createPost(req, res) {
  console.log(req.user);
  console.log(req.file);
}

module.exports = { createPost };
