const express = require("express");

const router = express.Router();

/*{/posts} not required -> defined in middleware of app.js*/
router.get("/", (req, res) => {
  res.send("Post route");
});

router.get("/specific", (req, res) => {
  res.send("Specific Post");
});

module.exports = router;
