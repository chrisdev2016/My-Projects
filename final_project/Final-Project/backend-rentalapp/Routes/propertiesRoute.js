const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));






const Property = require('../models/Property').model;


router.get('/properties',(req,res)=>{
Property.find({})
.then(properties=>{
    console.log(properties)
    res.json(properties);
})
.catch(err=>{
    console.log(err)
    res.status(400)
    .json({err})
})

})

router.post('/createListing', (req,res)=>{
    let property = req.body;
    console.log(req.body)
    let newProperty = new Property(property);

    newProperty.save()
    .then(savedProperty=>{
        console.log(savedProperty)
        res.json(savedProperty)
    })
    .catch(err=>{
        console.log(err)
        res.status(400)
        .json({err})
    })
    
})


router.get('/properties/:useremail', (req,res)=>{
     let email = req.params.useremail
     console.log(email)
   Property.find({"formEmail":"useremail"})
   .then(properties=>{
       console.log(properties);
       res.json(properties)
   })
   .catch(err=>{
       console.log(err)
       res.status(400)
       .json({err})
   })


})



router.delete('/cars/:car_id', (req,res)=>{
    Cars.findByIdAndRemove(req.params.car_id)
    .then(car=>{
        console.log(car)
        res.json(car)
    })
    .catch(err=>{
        console.log(err)
        res.status(400)
        .json({err})
    })

})
module.exports=router