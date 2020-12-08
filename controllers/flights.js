const Flight = require('../models/flight')


module.exports = {
    index,
    new: newFlight,
    create
}

function index(req,res) {
    Flight.find({},function(err, flights) {
        res.render('flights/index', {title: 'All flights', flights}
    )
})}  

function newFlight(req, res) {
    res.render('flights/new', {title: '', err:''})
}

function create(req, res) {
    const flight = new Flight(req.body) 
    flight.save(function(err, flight) {
        res.redirect(`/flights/${flight._id}`)
    })
}




// Flight.findById(req.params.id, function(err, flight) {

//     })
// }
