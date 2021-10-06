const mongoose = require("mongoose");

const { Schema } = mongoose;

const Blogcomments = new Schema({ 
    body: String,
    title: String,
   commentedBy:{
    type: Schema.Types.ObjectId,
    ref: 'Users'
},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    comments_for_post:{
        type: Schema.Types.ObjectId,
        ref: 'Blogs'
    },
  
})







Blogcomments.pre("save", next => {
  this.updated_at = Date.now()
  next()
})
module.exports = mongoose.model("Blogcomments", Blogcomments);
