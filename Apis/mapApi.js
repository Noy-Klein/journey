const express = require('express');
const router = express.Router();
const trips = require('../models/tripModel');
const checkpoint = require('../models/checkpointModel');
const users = require('../models/signupModel');

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
    trips.findOne({_id: id}).populate('checkpoints').exec((err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.send(data)
        }
    })
    // trips.findOne({ _id: id }).populate('checkpoints').exec((err, data) => {
    //     if (err) {
    //         res.status(500).send(err)
    //     }
    //     else {
    //         res.send(data)
    //     }
    // })
})

// router.post('/checkpoints', (req, res) => {
//     let id = req.body.object.id;
//     let newCheckPoint = new checkpoint(req.body.object.data);
//     trips.findOneAndUpdate({ _id: id }, { $push: { checkpoints: newCheckPoint } }, { new: true }).exec((err, trip) => {
//         newCheckPoint.coordinant = req.body.coo;
//         newCheckPoint.save((err, cp) => {
//             trip.save((err, trip) => {
//                 if(err){
//                     res.send(trip);
//                 }
//                 else{
//                     res.status(500).send(err)
//                 }
//             });
//         });
//     })
// })

router.post('/checkpoints', (req, res) => {
    let id = req.body.object.id;
    let newCheckPoint = new checkpoint(req.body.object.data);
    console.log(id)
    console.log(newCheckPoint)
    trips.findOneAndUpdate({ _id: id }, { $push: { checkpoints: newCheckPoint } }, { new: true }).exec((err, trip) => {
        newCheckPoint.coordinant = req.body.coo;
        newCheckPoint.save((err, cp) => {
            if (err) {
                res.status(500).send(err)
            }
            else {
                res.send(trip)
            }
        });
    })
})

router.get('/checkpoints/:id', (req, res) => {
    let idc = req.params.id;
    checkpoint.findById(idc).exec(function (err, data) {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.send(data)
        }
    })
});

module.exports = router;