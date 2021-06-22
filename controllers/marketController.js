const mongoose = require('mongoose');
const Market = require('../models/marketModel.js');



class MarketController {

  createMarket = async (req, res) => {
    // handle the creation of a new market
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
    try {
      const { id } = req.params;
      const reqMarket = await Market.findById(id);
      res.json(reqMarket);
    }
    catch (err) {
      res.send(err);
    }
  }


  updateMarket = async (req, res) => {
    // handles the updating of an existing market
  }


  deleteMarket = async (req, res) => {
    // handles the deletion of a specific market by ID
    try {
      const { id } = req.params;
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