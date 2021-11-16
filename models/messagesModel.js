const mongoose = require("mongoose");

const { Schema } = mongoose;


const MessagesSchema = new Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users'
    },
    receiver : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Users'
       },
    title : {type : String},
    body : {type : String},
    isDeleted:{type: Boolean,default:false}
},{timestamps:true});


module.exports = mongoose.model("MessagesSchema", MessagesSchema);
