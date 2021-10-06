const mongoose = require('mongoose');
const { Schema } = mongoose
const  {sendmail} =require( "../middlewares/mailer")



const Rooms = new Schema({
    no_rooms: String,
    Approved_By_Admin:{type:Boolean,default:false,enum:[true,false]},
  
    no_toilets:String,
    media: [{ uri: String }],
    isPaidAdd: {type:Boolean,default:false},
    paid_add: String,
    location: {
        type: { type: String },
        coordinates: [Number],
    },
    Building_type: String,
    rent: String,
    rent_method: String,
    no_occupants: Number,
    email: String,
    i_am: String,
    building_location: Object,
    street_name: String,
    rooms_avail_date: String,
    living_rooms: String,
    furnished_rooms: String,
    broker_agent_fee: String,
    rooms_size: String,
    minimum_stay: String,
    maximum_stay: String,
    amenities_swim: Boolean,
    amenities_internet: Boolean,
    amenities_play_ground: Boolean,
    amenities_parking_space: Boolean,
    amenities_entry_disabled: Boolean,
    amenities_balcony: Boolean,
    amenities_others: Boolean,
    amenities_private_toilets: Boolean,
    existing_room_mates: Object,
    new_room_mate: Object,
    advert_title: String,
    advert_description: String,
    post_code: String,
    currency: String,
   
    posted_by:{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
})
 
Rooms.index({ location: "2dsphere" });

Rooms.pre("save", next => {
    this.updated_at = Date.now()
  
    next()
  })


//   Rooms.path('no_rooms').set(function (newVal) {
//       var originalVal = this.no_rooms;
//       console.log(originalVal)
//     if (newVal!==originalVal) {
//       this._customState = true;
//       }
//       return newVal
      
//   });


// Rooms.post('findOneAndUpdate', function (doc) {
//     //check modified fields or if the name field was modified and then update doc
//     var modified_paths = this.getUpdate().$set.no_rooms
    
//     console.log(modified_paths);
 
// })
// Rooms.pre('findOneAndUpdate', function (next) {

//     if (this._customState) {
//         console.log("value changed")
//     }

//     next()
// });

Rooms.pre('findOneAndUpdate', async function() {
    const docToUpdate = await this.model.findOne(this.getQuery());
    //console.log(docToUpdate.Approved_By_Admin); // The document that `findOneAndUpdate()` will modify
    const modifiedFields = this.getUpdate()['$set']['Approved_By_Admin'];
    // console.log(modifiedFields)
    if (docToUpdate.Approved_By_Admin === false && modifiedFields === true) {
        console.log("YOUR ADD HAS BEEN APPROVED BY ADMIN AND ITS VISSIBLE NOW" + docToUpdate.email)
        try {
            await sendmail(docToUpdate)
        }
        catch (err) {
            console.log(err)
        }
    }
  });
  


module.exports = mongoose.model("rooms",Rooms)