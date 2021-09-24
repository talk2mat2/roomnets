const mongoose = require("mongoose");

const { Schema } = mongoose;

const HomepageModels = new Schema({
  name: {type:String,default:"home"} ,
  videoUrl: { type: String, },
  RecentRooms:[{Uri:String}],
  RecentApartments: [{ uri: String }],
  Banners:[{ uri: String }]
});

module.exports = mongoose.model("HomepageModels", HomepageModels);
