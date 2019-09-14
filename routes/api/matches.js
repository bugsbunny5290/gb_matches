const express = require("express");
const data = require("../../db/matches.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(data.matches);
});

router.get("/:role", (req, res) => {
  const found = data.matches.some(match => match.role === req.params.role);
  if (found) {
    res.json(data.matches.filter(match => match.role === req.params.role));
  } else
    res
      .status(400)
      .json({ message: `No match found with role: ${req.params.role}` });
});

module.exports = router;
