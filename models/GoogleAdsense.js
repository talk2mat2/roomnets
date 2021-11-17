
const mongoose = require("mongoose");

const { Schema } = mongoose;

const GoogleAdsense = new Schema({
    AdSenseCodeHtmlScript: { type: String, required: true }, 
},{timestamps:true})

module.exports = mongoose.model("GoogleAdsense", GoogleAdsense);
  
