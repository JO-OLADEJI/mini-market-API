const express = require('express');
const router = express.Router();
const { createMarket, readMarket, readMarkets, updateMarket, deleteMarket } = require('../controllers/marketController.js');
const auth = require('../middlewares/auth.js');



// read all markets
router.get('/', readMarkets);


// read a specific market
router.get('/:id', readMarket);


// create a new market
router.post('/new', auth, createMarket);


// update a post
router.put('/:id', auth, updateMarket);


// delete a post
router.delete('/:id', auth, deleteMarket);



module.exports = router;