const express = require('express');
const router = express.Router();
const trips = require('../models/tripModel');
const checkpoint = require('../models/checkpointModel');

router.get('/trips', (req,res)=>{
    trips.find({}).populate('checkpoints').exec((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.send(data)
        }
    })
});

router.post('/trips', (req,res)=>{
    let newTrip = new trips(req.body);
    newTrip.save();
    res.send(newTrip)
});

module.exports = router