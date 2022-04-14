const mongoose = require("mongoose");

const HowItWorks = new mongoose.Schema({
  title: String,
  body: String,
});

module.exports = mongoose.model("HowItWorks",HowItWorks);
