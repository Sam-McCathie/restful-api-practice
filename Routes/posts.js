const express = require("express");
const router = express.Router();
const Post = require("../Models/post");

// NOTE - /posts not required -> defined in middleware of app.js '/' = '/posts'

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({message: err});
  }
});

//Get specific post - postId pulls from the url -> concatenate the id of the post to the end of the post url -> this will return the post you are after
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({message: err});
  }
});

// Submits post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({message: err});
  }
});

// Delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);
  } catch (err) {
    res.json({message: err});
  }
});

//Update a post title
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      {_id: req.params.postId},
      {
        $set: {title: req.body.title},
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({message: err});
  }
});

module.exports = router;
