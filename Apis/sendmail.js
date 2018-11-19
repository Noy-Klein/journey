const express = require('express');
const router = express.Router();
let nodemailer = require('nodemailer');

router.post('/sendmail', (req, res) => {
    let from= req.body.from;
    let to = req.body.to;
    let Emailadress = req.body.Emailadress;
    let body = req.body.body;
    console.log(from, to, Emailadress, body)

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nwyqlyyn@gmail.com',
            pass: 'noy123456'
        }
    });
    
    let mailOptions = {
        from: from,
        to: Emailadress,
        subject: 'Hey ' + to   +' remember?',
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