const mongoose = require ('mongoose')

const TripSchema = new mongoose.Schema({
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
    checkpoints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'checkpoint' }]
})

const Trip = mongoose.model('trip', TripSchema)
module.exports = Trip;
