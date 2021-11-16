const mongoose = require("mongoose");

const { Schema } = mongoose;

const HomepageModels = new Schema({
  name: {type:String,default:"home"},
  videoUrl: { type: String, },
  RecentRooms:[{Uri:String}],
  RecentApartments: [{ uri: String }],
  Banners:[{ uri: String }],
  Banners_US:[{ uri: String }],
  Banners_GB:[{ uri: String }],
  Banners_GH:[{ uri: String }],
  Banners_IE:[{ uri: String }],
  Banners_KE:[{ uri: String }],
  Banners_ZA:[{ uri: String }],
  Banners_NG:[{ uri: String }],
  privacy:[{title:String,body:String}],
  faq:[{title:String,body:String}],
  aboutUs:[{title:String,body:String}]
});

module.exports = mongoose.model("HomepageModels", HomepageModels);
