const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise=global.Promise;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));





const User = require('../models/User').model;


router.post('/register', (req,res)=>{
    // console.log(req);

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
        //respond with no object
        }
        
    })
    
    .catch(err=>{
        console.log("no such user with that email address")
    })

    
})


// router.get('/:user_id', (req,res)=>{
//      let id = req.params.user_id
//      console.log(id)
//    User.findById(id)
//    .then(user=>{
//        console.log(user);
//        res.json(user)
//    })
//    .catch(err=>{
//        console.log(err)
//        res.status(400)
//        .json({err})
//    })


// })


module.exports=router
