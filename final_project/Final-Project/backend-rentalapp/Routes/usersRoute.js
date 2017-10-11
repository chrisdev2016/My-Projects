const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise=global.Promise;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));





const User = require('../models/User').model;


router.post('/register', (req,res)=>{

    let user = req.body;
   
    let newUser = new User(user);

    newUser.save()
    .then(savedNewUser=>{
        console.log(savedNewUser)
        res.json(savedNewUser)
    })
    .catch(err=>{
        console.log(err)
        res.status(400)
        .json({err})
    })
    
})



router.post('/login', (req,res)=>{
    let user = req.body;
    console.log(user.email)
    let email = user.email
    let password =user.password
    User.find({"email":email})
    .then(user=>{
        console.log(user)
        if(user.password=password){
        console.log("valid")
        res.json(user)
        }
        else{
   console.log("invalid password")
        }
        
    })
    
    .catch(err=>{
        console.log("no such user with that email address")
    })

    
})



module.exports=router
