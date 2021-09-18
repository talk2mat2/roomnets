const mongoose = require('mongoose');
const { Schema } = mongoose



const Apartments = new Schema({
    no_rooms: String,
    amenities_private_toilets: Boolean,
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
    existing_room_mates: Object,
    new_room_mate: Object,
    advert_title: String,
    advert_description: String,
    post_code: String,
    posted_by:{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
})
 
Apartments.index({ location: "2dsphere" });

Apartments.pre("save", next => {
    this.updated_at = Date.now()
    next()
})


module.exports = mongoose.model("Apartments",Apartments)