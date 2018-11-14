const express = require('express');
const router = express.Router();
const trips = require('../models/tripModel');
const checkpoint = require('../models/checkpointModel');

router.get('/trips', (req,res)=>{
    trips.find({}).exec((err,data)=>{
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

trips.create({
    title: 'Paris',
    description: 'With My Friends',
    startDate: new Date(2,2,2018),
    endDate: new Date(2,3,2018),
    checkpoints: []
}, (err,data)=>{
    console.log(data)
})

//title: String,
// description: String,
// startDate: Date,
// endDate: Date,
// checkpoints: [{ type: Schema.Types.ObjectId, ref: 'checkpoint' }]

module.exports = router