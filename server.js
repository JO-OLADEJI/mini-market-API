const express = require('express');
const app = express();
const { dbConnection } = require('./db/dbConnection.js');



dbConnection();
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Mini Market Data Bank');
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});