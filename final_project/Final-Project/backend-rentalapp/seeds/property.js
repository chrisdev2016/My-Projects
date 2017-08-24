const mongoose = require('mongoose');
const Property= require('../models/Property').model;
const User = require('../models/User').model;
const Review = require('../models/Review').model;


module.exports = () => {
    Property.find({}, (err, users) => {
        if (err) {
            console.log(err);
        } else if (properties.length === 0) {
            User.find({}, (err, users) => {
                if (err) {
                    console.log(err);
                } else {
                    if (users.length < 2)  {
                        console.log('No users to use for seeding properties');
                    } else {
                        const propertiesToSeed = [
                            {
                                address_line1: "477 broadgreen street",
                                address_line2: "2a",
                                city: "Pickering",
                                province: "ontario",
                                postal_code: "l1w3h6",
                                total_square_foot: 1100,
                                Number_of_rooms: 2,
                                Number_of_bathrooms: 1,
                                pets_allowed: true,
                                Number_of_parking: 1,
                                Heating_cooling: "gas",
                                Pictures: ["url1","url2"],
                                rent_amount: 1000,
                                Deposit_amount:3000,
                                contact_name: "christine",
                                contact_number: 4166132915,
                                contact_email: "maneka2006@hotmail.com",
                                Create_user_id:user_id: users[0]._id ,
                                Reviews: review_id: reviews[0]._id 

                            }, {
                                
                                address_line1: "477 broadgreen street",
                                address_line2: "2a",
                                city: "Pickering",
                                province: "ontario",
                                postal_code: "l1w3h6",
                                total_square_foot: 1100,
                                Number_of_rooms: 2,
                                Number_of_bathrooms: 1,
                                pets_allowed: true,
                                Number_of_parking: 1,
                                Heating_cooling: "gas",
                                Pictures: ["url1","url2"],
                                rent_amount: 1000,
                                Deposit_amount:3000,
                                contact_name: "christine",
                                contact_number: 4166132915,
                                contact_email: "maneka2006@hotmail.com",
                                Create_user_id:user_id: users[0]._id ,
                                Reviews: review_id: reviews[0]._id 

                            }, {
                                address_line1: String,
                                address_line2: String,
                                city: String,
                                province: String,
                                postal_code: String,
                                total_square_foot: Number,
                                Number_of_rooms: Number,
                                Number_of_bathrooms: Number,
                                pets_allowed: Boolean,
                                Number_of_parking: Number,
                                Heating_cooling: String,
                                Pictures: String,
                                rent_amount: Number,
                                Deposit_amount: Number,
                                contact_name: String,
                                contact_number: Number,
                                contact_email: String,
                                Create_user_id: { type: ObjectId, ref: "User" },
                                Reviews: { type: ObjectId, ref: "Review" }

                            }, {

                                address_line1: String,
                                address_line2: String,
                                city: String,
                                province: String,
                                postal_code: String,
                                total_square_foot: Number,
                                Number_of_rooms: Number,
                                Number_of_bathrooms: Number,
                                pets_allowed: Boolean,
                                Number_of_parking: Number,
                                Heating_cooling: String,
                                Pictures: String,
                                rent_amount: Number,
                                Deposit_amount: Number,
                                contact_name: String,
                                contact_number: Number,
                                contact_email: String,
                                Create_user_id: { type: ObjectId, ref: "User" },
                                Reviews: { type: ObjectId, ref: "Review" }
                            }, {

                                address_line1: String,
                                address_line2: String,
                                city: String,
                                province: String,
                                postal_code: String,
                                total_square_foot: Number,
                                Number_of_rooms: Number,
                                Number_of_bathrooms: Number,
                                pets_allowed: Boolean,
                                Number_of_parking: Number,
                                Heating_cooling: String,
                                Pictures: String,
                                rent_amount: Number,
                                Deposit_amount: Number,
                                contact_name: String,
                                contact_number: Number,
                                contact_email: String,
                                Create_user_id: { type: ObjectId, ref: "User" },
                                Reviews: { type: ObjectId, ref: "Review" }

                            }
                        ];
                        Property.collection.insert(propertiesToSeed, (err, properties) => {
                            console.log(properties)
                        })
                    }
                }
            })
        }
    })
}

