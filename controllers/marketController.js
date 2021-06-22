const Market = require('../models/marketModel.js');
const { verifyMarket } = require('../middlewares/verification.js');



class MarketController {

  createMarket = async (req, res) => {
    // handle the creation of a new market
    const { value, error } = verifyMarket(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }

    const { name, description, foodCategory, images, geolocation } = value;
    try {
      const newMarket = new Market({ name, description, foodCategory, images, geolocation });
      const save = await newMarket.save();
      res.json(save);
    }
    catch (err) {
      res.send(err);
    }
  }


  readMarkets = async (req, res) => {
    // returns an array of all the markets
    try {
      const allMarkets = await Market.find();
      res.json(allMarkets);
    }
    catch(err) {
      res.send(err);
    }
  }


  readMarket = async (req, res) => {
    // returns a specific market by ID
    const { id } = req.params;
    try {
      const reqMarket = await Market.findById(id);
      res.json(reqMarket);
    }
    catch (err) {
      res.send(err);
    }
  }


  updateMarket = async (req, res) => {
    // handles the updating of an existing market
    const { id } = req.params;
    const { value, error } = verifyMarket(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }

    const { name, description, foodCategory, images, geolocation } = value;
    try {
      const update = await Market.updateOne(
        { _id: id }, 
        {
          $set: {
            name,
            description,
            foodCategory,
            images,
            geolocation
          }
        }
      );
      res.json(update);
    }
    catch (err) {
      res.send(err);
    }
  }


  deleteMarket = async (req, res) => {
    // handles the deletion of a specific market by ID
    const { id } = req.params;
    try {
      const delMarket = await Market.deleteOne({ _id: id });
      res.json(delMarket);
    }
    catch (err) {
      res.send(err);
    }
  }

}



const marketController = new MarketController();
module.exports = {
  createMarket: marketController.createMarket,
  readMarket: marketController.readMarket,
  readMarkets: marketController.readMarkets,
  updateMarket: marketController.updateMarket,
  deleteMarket: marketController.deleteMarket
}