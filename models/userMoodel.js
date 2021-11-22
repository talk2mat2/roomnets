const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true }, // String is shorthand for {type: String}
  lastName: String,
  salutation: String,
  sex: String,
  imgUrl:String,
  mobileNumber: { type: String },
  dateOfBirh: String,
  martiatStatus: String,
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  mobilePhonbe: String,
  isAdmin: { Type: Boolean, default: false },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
  country:{type:String,enum:['Nigeria','Kenya','Ireland','Usa','Uk','South Africa','Ghana']},
  plans: { type: String, default: "Basic" ,enum:['Basic','Premium']},

  purchase_date:Date,
  expire_date:Date,
});

UserSchema.methods.verifyPassword = async function (Password) {
  const match = await bcrypt.compare(Password, this.Password);

  if (match) {
    return true;
  } else {
    return false;
  }
};

UserSchema.pre("save", next => {
  this.updated_at = Date.now()
  next()
})

module.exports = mongoose.model("Users", UserSchema);
