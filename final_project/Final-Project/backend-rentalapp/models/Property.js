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


});


const propertyModel = mongoose.model('Property', propertySchema);

module.exports = {
    model: propertyModel,
    schema: propertySchema
};


