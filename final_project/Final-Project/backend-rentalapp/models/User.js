const mongoose = require("mongoose"),
      Schema = mongoose.Schema;
       ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
   
    name:String,
    email:String,
    password:String,
    type:String,
    linkedIn_profile:String,
    tel:Number,
    Reviews:{type:ObjectId, ref: "Review"},
    properties:{type:ObjectId, ref: "Property"}

});

const userModel = mongoose.model('User', userSchema);

module.exports = {
    model: userModel,
    schema: userSchema
};