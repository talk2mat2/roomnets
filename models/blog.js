const mongoose = require("mongoose");

const { Schema } = mongoose;

const Blogs = new Schema({
    title: { type: String, required: true }, // String is shorthand for {type: String}
    body: String,
    likes:[{
      type: Schema.Types.ObjectId,
        ref: 'Users'
  }],
    country:{type:String,default:"All"},
    postedBy: { type: String, default: "Admin" },
    imagUri: String,
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    comments:[{
        type: Schema.Types.ObjectId,
        ref: 'Blogcomments'
    }],
  
})







Blogs.pre("save", next => {
  this.updated_at = Date.now()
  next()
})
module.exports = mongoose.model("Blogs", Blogs);
