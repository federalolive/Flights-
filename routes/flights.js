const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights') 

router.get('/', flightsCtrl.index)
router.post('/', flightsCtrl.create)
router.get('/new', flightsCtrl.new)



module.exports = router;
