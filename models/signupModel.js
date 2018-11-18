const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    email: String,
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'trip' }],
});
const user = mongoose.model('user', userSchema)
module.exports = user;