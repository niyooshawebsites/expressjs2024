const express = require("express");
const router = express.Router();

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

// get all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// get a particular post
router.get("/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const post = posts.filter((post) => post.id === id);
  res.json(post);
});

router.get("/", (req, res) => {
  console.log(req.query);
  const limit = parseInt(req.query.limit);
  const result = posts.slice(0, limit);
  res.json(result);
});

module.exports = router;
