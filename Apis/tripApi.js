const express = require('express');
const router = express.Router();
const trips = require('../models/tripModel');
const checkpoint = require('../models/checkpointModel');
const users = require('../models/signupModel');

router.get('/:userId/trips', (req, res) => {
    let userId = req.params.userId
    users.findOne({ _id: userId }).populate('trips').exec((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.send(data)
        }
    })
});

router.post('/:userId/trips', (req, res) => {
    let userId = req.params.userId
    let newTrip = new trips(req.body);
    users.findOneAndUpdate({ _id: userId }, { $push: { trips: newTrip } }, { new: true }).exec((err, user) => {
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