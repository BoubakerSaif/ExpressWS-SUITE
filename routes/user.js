const express = require("express");

const router = express.Router();
//@users/
// register
router.post("/", (req, res) => {
  console.log(req.body.firstName);
  res.send("Created");
});

router.get("/new", (req, res) => {
  res.render("index");
});

//getUserProfile
router.get("/:id", (req, res) => {
  res.send(`User get With id ${req.params.id}`);
});

module.exports = router;
