const mongoose = require("mongoose");

const whyChooseUs = new mongoose.Schema({
  title: String,
  body: String,
});

module.exports = mongoose.model('whyChooseUs',whyChooseUs)