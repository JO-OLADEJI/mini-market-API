const mongoose = require('mongoose');
require('dotenv/config.js');


const dbConnection = () => {
  mongoose.connect(
    process.env.DB_CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB ...')
  );
}


module.exports = { dbConnection }