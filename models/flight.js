const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema ({
    seat: {type: String,
    match: /[A-F][1-50]\d?/},
    price: {type: Number, min: 0}
}, {
    timestamps: true
})

const flightSchema = new Schema ({
    airline: {
        type: String, 
        enum:['American Airlines', 'Jet Blue Airways', 'Southwest', 'Delta', 'Virgin', 'United', 'Philippine Airlines', 'Japan Airlines']},
    airport: {
        type: String, 
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SFO', 'HND', 'NRT', 'HKG', 'MNL'], 
        default: 'DFW'},
    flightNo: {
        type: Number, 
        min: 10, 
        max: 9999},
    departs: {
        type: Date, default:() => Date.now() + 365*24*60*60*1000
    },
    tickets: [ticketSchema],

},{timestamps: true

})


module.exports = mongoose.model('Flight', flightSchema)
