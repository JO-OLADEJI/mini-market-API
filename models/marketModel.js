const mongoose = require('mongoose');



const MarketModel = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
  description: {
    type: String,
    required: true
  },

  foodCategory: {
    type: String,
    required: true
  },

  images: {
    type: Array,
    required: true
  },

  geolocation: {
    type: Object,
    required: true
  },

  timestamp: {
    type: Date,
    default: Date.now()
  }

});



module.exports = mongoose.model('markets', MarketModel);