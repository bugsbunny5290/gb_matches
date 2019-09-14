const Add = require("../../db/Model");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { lane, gameId, champion, platformId, queue, role, season } = req.body;
  let errors = [];

  if (
    !lane ||
    !gameId ||
    !champion ||
    !platformId ||
    !queue ||
    !role ||
    !season
  ) {
    errors.push({ message: "Please fill all the fields" });
  }

  if (errors.length > 0) {
    res.status(400).send(errors);
  } else {
    Add.findOne({ gameId: gameId }).then(match => {
      if (match) {
        res.status(401).send({ message: "Match is already registered" });
      } else {
        const newMatch = new Add({
          lane,
          gameId,
          champion,
          platformId,
          queue,
          role,
          season
        });
        
        newMatch
          .save()
          .then(res.status(201).send(req.body))
          .catch(err => console.log(err));
      }
    });
  }
});

module.exports = router;
