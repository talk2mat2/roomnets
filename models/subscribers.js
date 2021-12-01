const mongoose = require("mongoose");

const { Schema } = mongoose;

const Subscribers = new Schema({

    Email:{type:String,required:true},
  
})







Subscribers.pre("save", next => {
  this.updated_at = Date.now()
  next()
})
module.exports = mongoose.model("Subscribers", Subscribers);
