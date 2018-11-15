const express = require('express');
const router = express.Router();
const trips = require('../models/tripModel');
const checkpoint = require('../models/checkpointModel');

router.get('/checkpoints', (req, res) => {
    checkpoint.find({}).exec((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.send(data)
        }
    })
});

router.get('/trips/:id', (req, res) => {
    let id = req.params.id;
    console.log(id)
    trips.findOne({ _id: id }).populate('checkpoints').exec((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            console.log(data)
            res.send(data)
        }
    })
})

router.post('/checkpoints', (req, res) => {
    let id = req.body.object.id;
    let newCheckPoint = new checkpoint(req.body.object.data);
    trips.findOneAndUpdate({ _id: id }, { $push: { checkpoints: newCheckPoint } }, { new: true }).exec((err, trip) => {
        newCheckPoint.coordinant = req.body.coo;
        newCheckPoint.save((err, trip) => {
            trip.save((err, trip) => {
                console.log(trip)
                res.send(trip);
            });
        });
    })
})

module.exports = router