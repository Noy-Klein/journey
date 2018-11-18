const express = require('express');
const users = require('../models/signupModel');
const router = express.Router();

router.get('/users/:username/:password', function (req, res) {
    let username = req.params.username
    let password = req.params.password
    User.find({ username: username, password: password }).populate('trips').exect((err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(user)
        }
    })
});


router.post('/users', (req, res) => {
    let newUser = new users(req.body);
    newUser.save(function (err, data) {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.send(data)
        }
    });
});

module.exports = router;