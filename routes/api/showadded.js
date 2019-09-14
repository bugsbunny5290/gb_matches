const express = require("express");
const Add = require("../../db/Model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Add.find({}, (err, matches) => {
    if (err) {
      res.status(401).send(err);
      next();
    }
    res.status(200).json(matches);
  });
});

router.get("/:gameId", (req, res, next) => {
  let id = req.params.gameId;

  Add.findOne({ gameId: id }, (err, match) => {
    if (err) {
      res.status(401).send(err);
      next();
    }
    res.status(200).json(match);
  });
});

module.exports = router;
