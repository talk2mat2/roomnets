const mongoose = require("mongoose");

const accessibilityStatement = new mongoose.Schema({
  title: String,
  body: String,
});

module.exports = mongoose.model('accessibilityStatement',accessibilityStatement)