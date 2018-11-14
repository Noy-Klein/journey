const express = require('express');
const router = express.Router();
const trips = require('../models/tripModel');
const checkpoint = require('../models/checkpointModel');

router.get('/checkpoints', (req,res)=>{
    checkpoint.find({}).exec((err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
           res.send(data) 
        }
    })
});

router.post('/checkpoints', (req,res)=>{
    let newCheckPoint = new checkpoint(req.body);
    newCheckPoint.save();
    res.send(newCheckPoint);
})

module.exports = router