const Flight = require('../models/flight')


module.exports = {
    index,
    new: newFlight,
    create,
    show
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
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
      if (err) {
        return res.render('/flights/new', {err: err})
      }
      console.log(flight)
      res.redirect(`/flights/${flight._id}`)
    })
  }

function show(req, res) {
     Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: 'Flight Details', flight})
     })
}
