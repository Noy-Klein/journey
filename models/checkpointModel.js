const mongoose = require('mongoose')

const CheckpointSchema = new mongoose.Schema({
    title: String,
    description: String,
    startDate: Date,
    people: [String],
    adress: String,
    pictures: [String],
    coordinant: Object
});


const CheckPoint = mongoose.model('checkpoint', CheckpointSchema)
module.exports = CheckPoint;
