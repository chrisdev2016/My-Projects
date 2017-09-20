const mongoose = require('mongoose');
const User = require('../models/User').model;
const Review = require('../models/Review').model;

const usersToSeed = [
    {
        name: "christine thamo",
        email: "maneka2006@hotmail.com",
        password: "123456",
        type: "renter",
        linkedIn_profile: "https://www.linkedin.com/in/christine-thamotharam-20b069136/",
        tel: 4166132915,
        Reviews: [],
        properties: []
    }, {
        name: "ajith jay",
        email: "maneka2006@hotmail.com",
        password: "123456",
        type: "homeOwner",
        linkedIn_profile: "https://www.linkedin.com/in/christine-thamotharam-20b069136/",
        tel: 4166132915,
        Reviews: [],
        properties: []

    }, {
        name: "john smith",
        email: "maneka2006@hotmail.com",
        password: "123456",
        type: "homeOwner",
        linkedIn_profile: "https://www.linkedin.com/in/christine-thamotharam-20b069136/",
        tel: 4166132915,
        Reviews: [],
        properties: []
    }, {
        name: "arianna david",
        email: "maneka2006@hotmail.com",
        password: "123456",
        type: "renter",
        linkedIn_profile: "https://www.linkedin.com/in/christine-thamotharam-20b069136/",
        tel: 4166132915,
        Reviews: [],
        properties: []
    }, {
        name: "kristen george",
        email: "maneka2006@hotmail.com",
        password: "123456",
        type: "homeOwner",
        linkedIn_profile: "https://www.linkedin.com/in/christine-thamotharam-20b069136/",
        tel: 4166132915,
        Reviews: [],
        properties: []
    }, {
        name: "vishal gomez",
        email: "maneka2006@hotmail.com",
        password: "123456",
        type: "renter",
        linkedIn_profile: "https://www.linkedin.com/in/christine-thamotharam-20b069136/",
        tel: 4166132915,
        Reviews: [],
        properties: []
    }

]
module.exports = () => {
    User.find({}, (err, users) => {
        if (err) {
            console.log(err)
        } else {
            if (users.length === 0) {
                User.collection.insert(usersToSeed, (err, users) => {
                    console.log(users)
                })
            }
        }
    })
}
