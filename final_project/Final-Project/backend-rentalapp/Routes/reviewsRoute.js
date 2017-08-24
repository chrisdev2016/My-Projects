const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise=global.Promise;



router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));




const Cars = require('../models/Cars').model;
const Dealerships = require('../models/Dealerships').model;





router.get('/dealerships',(req,res)=>{
Dealerships.find({})
.then(dealerships=>{
    res.json(dealerships);
})
.catch(err=>{
    console.log(err)
    res.status(400)
    .json({err})
})

})

router.post('/dealerships', (req,res)=>{
    let dealership = req.body;
    let newDealership = new Dealerships(dealership);

    newDealership.save()
    .then(saveddealership=>{
        console.log(saveddealership)
        res.json(saveddealership)
    })
    .catch(err=>{
        console.log(err)
        res.status(400)
        .json({err})
    })
    
})


router.get('/dealerships/:dealership_id', (req,res)=>{
     let id = req.params.dealership_id
     console.log(id)
   Dealerships.findById(id)
   .then(dealership=>{
       console.log(dealership);
       res.json(dealership)
   })
   .catch(err=>{
       console.log(err)
       res.status(400)
       .json({err})
   })


})

router.put('/:dealership_id', (req,res)=>{
    Dealerships.findOneAndUpdate({_id:req.params.dealership_id},{$set:{make:req.body.make}},{})
    .then(dealership=>{
        if(dealership) {
            console.log(dealership)
            res.json(dealership)
        } else {
            console.log('Dealership not found. ID: ' + req.params.dealership_id);
            res.status(400).json({error: 'Dealership with id ' + req.params.dealership_id + ' no found.'})
        }
    })

    .catch(err=>{
        console.log(err)
        res.status(400)
        .json({err})
    })
    


})



router.delete('/dealerships/:dealership_id', (req,res)=>{
    Dealerships.findByIdAndRemove(req.params.dealership_id)
    .then(dealership=>{
        console.log(dealership)
        res.json(dealership)
    })
    .catch(err=>{
        console.log(err)
        res.status(400)
        .json({err})
    })
})


module.exports=router
