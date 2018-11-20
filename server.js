let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let tripApi = require("./Apis/tripApi");
let sendmail = require("./Apis/sendmail");
let mapApi = require('./Apis/mapApi');
let usersApi = require('./Apis/userApi')

let app = express()

mongoose.connect(process.env.CONNECTION_STRING||'mongodb://localhost/trip', function () {
    console.log("DB connection established!!!");
})

app.use(express.static('build'))
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })
  
app.use(mapApi)
app.use(usersApi)
app.use('/', tripApi)
app.use('/', sendmail)
// app.get('/key', (req,res)=>{
//     res.send('AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M')
// })

app.listen(process.env.PORT||1000, () => {
    console.log('server started on port 1000')
});