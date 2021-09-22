const mongoose = require("mongoose");

const { Schema } = mongoose;

const HomepageModels = new Schema({
  videoUrl: { type: String, },
  RecentRooms:[{Uri:String}],
  RecentApartments: [{ Uri: String }],
  Banners:[{ Uri: String }]
});

module.exports = mongoose.model("HomepageModels", HomepageModels);
