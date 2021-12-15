const mongoose = require("mongoose");

const { Schema } = mongoose;

const HomepageModels = new Schema({
  name: {type:String,default:"home"},
  videoUrl: { type: String, },
  RecentRooms:[{Uri:String}],
  RecentApartments: [{ uri: String }],
  Banners:[{ uri: String }],

  privacy:[{title:String,body:String}],
  faq:[{title:String,body:String}],
  aboutUs:[{title:String,body:String}],
  SitePhone:{ type: String },
  SiteEmail:{ type: String },
  SiteOfficeAddress:{ type: String },
  TwitterLink:{ type: String },
  FacebookLink:{ type: String },
  InstagramLink:{ type: String },
  linkedinLink:{ type: String },
  YoutubeLink:{ type: String },
  partners:[{name:String,url:String,imagUri:String}],
  sliders:[{imagUri:String}],
  Banners_US:[{ uri: String }],
  Banners_GB:[{ uri: String }],
  Banners_GH:[{ uri: String }],
  Banners_IE:[{ uri: String }],
  Banners_KE:[{ uri: String }],
  Banners_ZA:[{ uri: String }],
  Banners_NG:[{ uri: String }],
});

module.exports = mongoose.model("HomepageModels", HomepageModels);
