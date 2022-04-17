const Rooms = require("../models/rooms");
const Apartment = require("../models/apartments");
exports.delete7daysRooms = async (req, res, next) => {
  await Rooms.find({}).then(async (item) => {
    if (item.length > 0) {
      const expiredAdd = [];
      item.map((roomPost, index) => {
        const date1 = new Date(roomPost.created_at);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 14 && !roomPost.isPaidAdd) {
          //  await Rooms.deleteOne({_id:roomPost.id})
          expiredAdd.push(roomPost.id);
        }
      });
      if (expiredAdd.length > 0) {
          await Apartment.deleteMany({ _id: { $in: expiredAdd } }, function (err) {
            console.log("deleted expired adds");
          });
      }
    }
    next();
  });
};
exports.delete7daysApartment = async (req, resp, next) => {
  await Apartment.find({}).then(async (item) => {
    if (item.length > 0) {
      const expiredAdd = [];
      item.map((roomPost, index) => {
        const date1 = new Date(roomPost.created_at);
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 14 && !roomPost.isPaidAdd) {
          //  await Rooms.deleteOne({_id:roomPost.id})
          expiredAdd.push(roomPost.id);
        }
      });
      if (expiredAdd.length > 0) {
          await Apartment.deleteMany({ _id: { $in: expiredAdd } }, function (err) {
            console.log("deleted expired adds");
          });
      }
    }
    next();
  });
};
