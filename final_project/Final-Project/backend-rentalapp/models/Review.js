const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

const reviewSchema = new Schema({
   
    make:String,
    city:String,
    province:String,
    postal_code:String,
    street:String,
    reviews:[]

});

const reviewModel = mongoose.model('Review', reviewSchema);

module.exports = {
    model: reviewModel,
    schema: reviewSchema
};