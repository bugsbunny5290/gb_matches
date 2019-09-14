const mongoose = require("mongoose");

const AddMatchSchema = new mongoose.Schema({
  lane: {
    type: String,
    required: true
  },
  gameId: {
    type: Number,
    required: true
  },
  champion: {
    type: Number,
    required: true
  },
  platformId: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  queue: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  season: {
    type: Number,
    required: true
  }
});

const Add = mongoose.model("Match", AddMatchSchema);

module.exports = Add;
