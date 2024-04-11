const mongoose = require("mongoose");

const scheme = new mongoose.Schema({
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Choir", scheme);
