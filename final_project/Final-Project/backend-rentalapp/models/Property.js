const mongoose = require("mongoose"),
      Schema = mongoose.Schema;
      ObjectId = Schema.Types.ObjectId;

const propertySchema = new Schema({
   
            formAddress: String,
            formUnit: String,
            formCity: String,
            formProvince: String,
            formPostalCode: String,
            formNumberOfBedrooms: Number,
            formNumberOfBathrooms: Number,
            formContactName: String,
            formContactNumber:Number ,
            formRentAmount: Number,
            formEmail: String


    // address:String,
    // unit:String,
    // city:String,
    // province:String,
    // postal_code:String,
    // // total_square_foot:Number,
    // number_of_bedrooms:Number,
    // number_of_bathrooms:Number,
    // // pets_allowed:String,
    // // number_of_parking:Number,
    // // Heating_cooling:String,
    // // Pictures:[],
    // rent_amount:Number,
    // contact_name:String,
    // contact_number:Number,
    // email:String,
    // // Create_user_id:{type:ObjectId, ref: "User"},
    // // Reviews:{type:ObjectId, ref: "Review"}


});


const propertyModel = mongoose.model('Property', propertySchema);

module.exports = {
    model: propertyModel,
    schema: propertySchema
};


