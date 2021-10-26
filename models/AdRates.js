const mongoose = require("mongoose");

const { Schema } = mongoose;

const AdRates = new Schema({
    country:{type:String,enum:['Nigeria','Kenya','Ireland','Usa','Uk','South Africa','Ghana'],required:true},
    currency:{type:String,enum:['USD','NGN'],required:true},
    WeeklyPrice:{type:Number,required:true},
    MonthlyPrice:{type:Number,required:true},
    YearlyPrice:{type:Number,required:true},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
})







AdRates.pre("save", next => {
  this.updated_at = Date.now()
  next()
})
module.exports = mongoose.model("AdRates", AdRates);
