const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema ({
    airline: {
        type: String, 
        enum:['American', 'Southwest', 'United', 'Philippine Airlines', 'Japan Airlines']},
    airport: {
        type: String, 
        enum:[AUS, DFW, DEN, LAX, SFO, HND, NRT, HKG, MNL], 
        default: 'DFW'},
    flightNo: {
        type: Number, 
        min: 10, 
        max: 9999},
    departs: {
        type: Date, default:() => Date.now() + 365*24*60*60*1000
    },
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)
