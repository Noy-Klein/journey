const mongoose = require ('mongoose')

const CheckpointSchema = new mongoose.Schema({

title: String,
description: String,
startDate: Date,
endDate: Date,
people: [String],
adress: String,
pictures: [String],
coordinants: Object

});


const CheckPoint = mongoose.model('checkpoint', CheckpointSchema)
module.exports = CheckPoint;
