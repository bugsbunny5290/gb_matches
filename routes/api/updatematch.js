const express = require("express");
const router = express.Router();
const Add = require("../../db/Model");

router.patch("/:gameId", (req, res) => {
  let update = {};
  update.lane = req.body.lane;
  update.champion = req.body.champion;
  update.platformId = req.body.platformId;
  update.queue = req.body.queue;
  update.role = req.body.role;
  update.season = req.body.season;

  let id = req.params.gameId;
  Add.findOne({ gameId: id }).then(match => {
    if (match) {
      Add.updateOne({ gameId: id }, update, function(err) {
        if (err) {
          return res.status(401).send(err);
        } else {
          return res.status(202).send(req.body);
        }
      });
    } else {
      res.status(401).send({ message: "Record not found" });
    }
  });
});

router.delete("/:gameId", (req, res) => {
  let id = req.params.gameId;
  Add.findOne({ gameId: id }).then(match => {
    if (match) {
      Add.deleteOne({ gameId: id }, function(err) {
        if (err) {
          res.status(401).send(err);
        } else {
          res.status(200).send({ message: "Record Deleted" });
        }
      });
    } else {
      res.status(401).send({ message: "Record not found" });
    }
  });
});

module.exports = router;
