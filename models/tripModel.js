const mongoose = require ('mongoose')

const TripSchema = new mongoose.Schema({
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
})

const Trip = mongoose.model('trip', TripSchema)
module.exports = Trip;
