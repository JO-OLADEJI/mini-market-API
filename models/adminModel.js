const mongoose = require('mongoose');



const AdminModel = mongoose.Schema({
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  timestamp: {
    type: Date,
    default: Date.now()
  }

});



module.exports = mongoose.model('admin', AdminModel);