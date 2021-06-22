const express = require('express');
const router = express.Router();
const { createMarket, readMarket, readMarkets, updateMarket, deleteMarket } = require('../controllers/marketController.js');



// read all markets
router.get('/', readMarkets)


// read a specific market
router.get('/:id', readMarket)


// create a new market
router.post('/new', createMarket)


// update a post
router.put('/:id', updateMarket)


// delete a post
router.delete('/:id', deleteMarket)



module.exports = router;