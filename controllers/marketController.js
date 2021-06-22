const mongoose = require('mongoose');




class MarketController {

  createMarket = async () => {
    // handle the creation of a new market
  }

  readMarkets = async () => {
    // returns an array of all the markets
  }

  readMarket = async () => {
    // returns a specific market by ID
  }

  updateMarket = async () => {
    // handles the updating of an existing market
  }

  deleteMarket = async () => {
    // handles the deletion of a specific market by ID
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