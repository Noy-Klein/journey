const express = require('express');
const router = express.Router();
const trips = require('../models/tripModel');
const checkpoint = require('../models/checkpointModel');
const users = require('../models/signupModel');

router.get('/:username/trips', (req, res) => {
    let username = req.params.username
    users.findOne({ username: username }).populate('trips').exec((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.send(data)
        }
    })
    // trips.find({}).populate('checkpoints').exec((err,data)=>{

    // })
});

router.post('/:username/trips', (req, res) => {
    let username = req.params.username
    let newTrip = new trips(req.body);
    // newTrip.save(function(err, data){
    //     if(err){
    //         res.status(500).send(err)
    //     }
    //     else{
    //         console.log(data)
    //         res.send(data)
    //     }
    // });
    users.findOneAndUpdate({ username: username }, { $push: { trips: newTrip } }, { new: true }).exec((err, user) => {
        newTrip.save(function (err, nt) {
            if (err) {
                res.status(500).send(err)
            }
            else {
                res.send(user)
            }
        })

    })
});

module.exports = router