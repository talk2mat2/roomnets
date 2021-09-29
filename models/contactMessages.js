const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const ContactMessages = new Schema({
    firstName: { type: String, required: true }, // String is shorthand for {type: String}
    lastName: String,
    mobileNumber: { type: String },
    email: { type: String },
    message: String,
    company: String,
    subject: String,
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
  
})







ContactMessages.pre("save", next => {
  this.updated_at = Date.now()
  next()
})
module.exports = mongoose.model("ContactMessages", ContactMessages);
