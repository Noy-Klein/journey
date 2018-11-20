const express = require('express');
const router = express.Router();
let nodemailer = require('nodemailer');

router.post('/sendmail', (req, res) => {
    let from= req.body.from;
    let Emailadress = req.body.Emailadress;
    let body = req.body.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'make.your.journey.app@gmail.com',
            pass: 'noymayyuval123'
        }
    });
    
    let mailOptions = {
        from: from,
        to: Emailadress,
        subject: `Hey ${req.body.to} Remember?`,
        text: body,
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

module.exports = router