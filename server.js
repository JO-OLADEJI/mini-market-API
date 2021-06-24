const express = require('express');
const app = express();
const { dbConnection } = require('./db/dbConnection.js');
const marketRoute = require('./routes/market.js');
const adminRoute = require('./routes/admin.js');
const cors = require('cors');



dbConnection();
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Mini Market Data Bank');
});
app.use('/api/market', marketRoute);
app.use('/api/admin', adminRoute);



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});